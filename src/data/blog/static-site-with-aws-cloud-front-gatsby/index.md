---
title: Static Website over https with S3, CloudFront, Gatsby and Continuous Delivery
date: "2018-11-05T18:41:37.121Z"
tags: ["webdev", "devops", "continuous delivery", "static website"]

---

At Appfocused our aim is to build enterprise grade solutions with minimal financial risk and choosing technology path of least resistance. A perfect showcase of applied simplicity and reliability at a low cost is the architecture of our very own website and blog.

In this post I'd like to share how Github / Travis and AWS suite of services help us to host our static website, setup domain and TLS certificates and automate deployments.

## Architecture

* Website content is generated and uploaded to S3 bucket
* CloudFront invalidates previous cache and caches the new contents of S3 bucket
* User requests `www.appfocused.com`
* AWS Route 53 A record matches this request and points to the linked CloudFront distribution
* Cloudfront distribution enables secure connection and serves cached version of S3 bucket's content

![Static website architecture](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2017/06/27/arch-1-2.png)

<center><small>Static website architechture</small></center>

## Tech choices

- **Static website generator**: Gatsby
- **Hosting**: AWS S3
- **Domain management**: AWS Route 53
- **TLS certificate**: AWS Certificate Manager
- **CDN**: AWS Cloudfront
- **Code repository**: Github
- **Continuous Deployment**: Travis

## Process

The baseline for the website ops looked as following:

- Generate the website
- Securely serve the website on https://www.appfocused.com
- Redirect all `appfocused.com` requests to `www.appfocused.com`
- Redirect all `http` requests to `https`
- Automatically build and deploy the website when a change is introduced
- Invalidate CDN cache on deployment

Let's go through it step by step and talk about tech decisions and setup.  



### 1. Generate the site

Fisrt things first, I had to generate the website. Out site uses [Gatsby v2](https://www.gatsbyjs.org/) — modern site generator for React. Since React paradigm has been introduced in 2013 it's hard to think of a better way for web apps and web pages to compose components and encapsulate styles with [CSS Modules](https://github.com/css-modules/css-modules). One it's set up, you need to run `gatsby build` and it will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.  

Checkout [our webstire's source code](https://github.com/appfocused/appfocused.com) on github for inspiration.

### 2. Host the site

Once I had the website content generated, I desperately needed to show it to everyone, and the easiest way to do it was to make it accessible on the Internet.

I used AWS S3 for this purpose. The service is dirt cheap, you don't need to run servers in an AWS EC2 instance, maintain it and check logs and most importantly pay for the uptime. All you do is you create buckets (think, folders) and upload your generated website content there. Finally, S3 bucket was configured to serve files as a static website.

To support both naked `appfocused.com` and `www.appfocused.com` I needed to create two S3 buckets with respective domain names. In our case `www.appfocused.com` bucket held all the static files for the website and `appfocused.com` bucket was empty and it was configured to redirect requests from `appfocused.com` to URL `www.appfocused.com` with `https` protocol.

I'm not going to discuss the setup at length as AWS has finally caught up on documentation and now has extensive docs on almost anyhting that you can think of. Here's a good document on how to set up a [basic static site with custom domain](https://github.com/awsdocs/amazon-s3-developer-guide/blob/master/doc_source/website-hosting-custom-domain-walkthrough.md). The devil is always in the details though and I will touch on these later on.

One key point to remember for now is that AWS S3 buckets used as [Website Endpoints](https://github.com/awsdocs/amazon-s3-developer-guide/blob/master/doc_source/WebsiteEndpoints.md) (e.g. `http://appfocused.s3-website.eu-west-1.amazonaws.com`) do not support secure connections. That is one of the reasons I add AWS Cloudfront layer to the architecture, so that I can proxy secure requests to our static website in the bucket. I'll tell you how to set it up in one of the next steps.

### 3. Register a domain

Our files are now hosted and can be viewed by our users through S3 bucket's URL. Next step is to add more presentable and professional domain name &mdash; `appfocused.com`.

I tend to choose a domain registrar carefully. It's not only about squatting a shiny domain name, but also thinking about ongoing domain management that you will be getting from the registrar.

Domain management directly affects server downtime, DNS configuration changes, software patches and numerous other tasks that pose serious challenges for IT organizations.

AWS Route 53 wins almost on all fronts for me: low cost, fast DNS updates, wildcard for subdomains (some providers block that capability), good integration with the rest of AWS (obviously).

### 4. Generate an SSL/TLS Certificate

Secure-by-default is a great mindset to have, and while many of our users may never notice, the ones who do will appreciate it. Another group of SSL/TLS cert fans is search engine crawlers. You can rest assured that your site will be penalised on [SERP](https://en.wikipedia.org/wiki/Search_engine_results_page) without a valid TLS certificate. Surely, I wanted to avoid the penalty.

With AWS Certificate Manager, I requested an SSL/TLS certificate for free. Add both naked domain and its www version to the new certificate (one cert that contains main domain, sub-domain and wild-cards).

One improtant thing to note: I had to change the AWS region to US East (N. Virginia) in the AWS Certificate Manager console before requesting or importing a certificate.

### 5. Create Cloudfront Distributions

There are two vital reasons to use Cloudfront in our solution:

- **Security at the edge**  
  SSL/TLS certificate provides network level protection.

- **Fast and Global**  
  website is served with improved latency and has lower the load on the origin servers (S3 buckets in our case).

#### Setup steps and some caveats

- I created <u>**two**</u> CloudFront Distributions. Each of this distributions point to corresponding bucket: one to `appfocused.com`, another one to `www.appfocused.com`
- For _Origin Domain Name_ I <u>**did not use AWS autosuggest**</u> in the dropdown (counterintuitive, I know). Instead, you are expected to manually enter bucket urls provided in _Static Website Hosting_ section (Website endpoint). The urls should have form (or similar): `appfocused.com.s3-website-us-west-1.amazonaws.com`
- On both distribution I set _HTTP to HTTPS_ redirect
- I left _Default Root Object_ empty
- I added our TLS certificate to _Custom SSL Certificate_ field

Once the distributions were created I made a note of both distribution URLs (similar to `d1111111111111.cloudfront.net`), they will play key role in the next step.

### 6. Configure your domain to work with Cloudfront

With two Cloudfront distributions set up and deployed successfully, I went to Route 53 to configure my domain DNS. I set A records for `www.appfocused.com` and `appfocused.com` to point to corresponding CloudFront distributions. (format similar to this: d1111111111111.cloudfront.net).  
Now our website is served only via https protocol: `http` traffic as well as `appfocused.com` traffic is redirected to `https://www.appfocused.com`. Perfect for SEO, as there are no mirrors (duplicate sites) created.

### 7. Setup continuous delivery with Github and Travis CI

The website code is hosted on github as open source, [we've got nothing to hide](https://github.com/appfocused/appfocused.com). 

Every commit to `master` branch triggers a build and deployment to AWS S3. The honours are done by [Travis CI](travis-ci.com). In order for it to work, I had to authorise it to access appfocused repository.

Then I added environment variables:

* `$AWS_ACCESS_KEY_ID` 
* `$AWS_SECRET_ACCESS_KEY` 
* `$S3_APPFOCUSED_BUCKET`
* `$CLOUDFRONT_DISTRIBUTION_ID`



Once there were configured in Travis, I added a config file inside my project's root on Github — [.travis.yml](https://github.com/appfocused/appfocused.com/blob/master/.travis.yml). It makes continuous integration and deployment possible by doing the following:

* installs AWS command line
* installs npm dependencies
* runs unit tests
* builds the project
* removes the contents of S3 bucket (previous release)
* deploy the new build to S3
* invalidate cache on CloudFront distributions for new content to appear on users screens



All of the above allows me to go to Github's web UI from the browser, add a folder and a markdown file inside `src/data/blog`. Once I'm done editing my mardown file, I'm able to save it and commit it to `master` branch using the same web interface in the browser. The new blog post will be available in a matter of seconds.



## Cost

Last but not least &mdash; cost of ownership.  
Annual maintenance cost for appfocused.com:

- domain price - **$12**
- S3 / Cloudfront - **$40**
- Gatsby / Github / Travis - **free** (subject to open source)

**Total: $52 per year**
