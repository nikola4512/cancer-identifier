# Cancer Identifier Web Service
(Its using model that not for real health usage)

It's web service that i made for cleared Dicoding submission in course "Learn Machine Learning Applications with Google Cloud", i'm contribute as back-end developer who deploy tensorflow model on GCP and make API for front-end usage.

Stack:
1. GCP Cloud Run/ VM Instance, for back-end API.
2. GCP Cloud storage bucket, for storage ML model.
4. Hapi.js, for build API.

How to use:
1. Download Directory
2. Install modules using NPM
3. Customize some of code using your case
4. Create your cloud storage bucket and give public permission for object inside
5. Create Firestore and set Application Default Credentials with attach service account
6. Deploy in VM instance or cloud run with public IP
7. Run with pm2 or other things

Ip address for API:
34.128.95.121/predict

Noted:
Test this api using postman or other tools with ip address above and using form-data body request, for key is "image" with image that you want to analyst.

Screenshot from web services usage with frontend:
![screencapture-nikolaarinanda-034512-et-r-appspot-2024-05-25-20_30_02](https://github.com/nikola4512/cancer-identifier/assets/43138798/d88b73ba-7d6f-4635-a938-ad45ebf1bf3c)

Screenshot for Postman called api:
![image](https://github.com/nikola4512/cancer-identifier/assets/43138798/1d71c32c-1c52-48d8-84bb-223a18bc2370)
