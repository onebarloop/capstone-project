# Neue Fische Capstone Project: ***Wannado***

## A Tattoo App

**Welcome dear developers 👾** 

This is the repository for my capstone project "Wannado". 
It was part of my three months frontend-bootcamp [@neuefische](https://www.neuefische.de/)

<img src=https://user-images.githubusercontent.com/115539625/207014840-a93ede10-dd86-4268-9afd-15ad24b5bb92.JPG width="200">

>***IMPORTANT*** When checking the app in the browser, please watch it in dimensions of 375 x 667 px (iPhone SE). Right now, the app is NOT responsive

### The basic Idea of the app:
- Users can browse random wannados, i.e. small tattoo-ideas. They can filter them by location, price etc.
- Users can visit the pages of the tattoo artist and see their time schedule for making an appointment
- Users can also see map with tattoo artists near them
- Tattoo artists can publish their time schedule, so making appointments is easy for both sides
- Tattoo artists can upload their sketches and tattoo-ideas, so users can browse them

Random View             |   Artist Page             |  Map Page |  Upload Page
:-------------------------:| :-------------------------:|:-------------------------:|:-------------------------:
<img src=https://user-images.githubusercontent.com/115539625/213181247-973948e7-66e0-491a-81d8-f15d8ceb2d46.png width="200">| <img src =https://user-images.githubusercontent.com/115539625/213181364-b9bd3a95-b682-40c9-86ee-171d3ca27bbb.png width="200"> | <img src=https://user-images.githubusercontent.com/115539625/213182553-13e8dbd6-ca8f-48cf-85bb-21f3b1cfb5e5.png width="200"> | <img src=https://user-images.githubusercontent.com/115539625/213182832-8c9786f0-03d6-4645-9be8-9ccae445ae58.png width="200">
 





### Structure of the App
 The App is sturctured in few different [/pages](https://github.com/onebarloop/capstone-project/tree/main/pages)
  - [/index.tsx](https://github.com/onebarloop/capstone-project/blob/main/pages/index.tsx) renders, depending on state, three different views: The Random View , handled via [Random View Component](https://github.com/onebarloop/capstone-project/blob/main/components/RandomView.tsx), the All Artists List and the Favorite Artists List, both handled via the [List Component](https://github.com/onebarloop/capstone-project/blob/main/components/List.tsx)
  - [/map.tsx](https://github.com/onebarloop/capstone-project/blob/main/pages/map.tsx) renders all components regarding the map feature, i.e. [Map.tsx, obciosuly](https://github.com/onebarloop/capstone-project/blob/main/components/Map.tsx) and [Selector.tsx](https://github.com/onebarloop/capstone-project/blob/main/components/Selector.tsx)
  - [/newuser.tsx](https://github.com/onebarloop/capstone-project/blob/main/pages/newuser.tsx) is the form page. Here artists can upload their information, schedule and their work
  - [/[slug].tsx](https://github.com/onebarloop/capstone-project/blob/main/pages/%5Bslug%5D.tsx) is the dynamic page: It renders the Artist the user is navigating. The slug ist the name of the artists without spaces and all lowercase. Its generated during artists creation and part of the artist object.

### The Data
The data, i.e. the Artist-Objects, are stored in a MongoDB. Basis of the object is the [ArtistClass.ts](https://github.com/onebarloop/capstone-project/blob/main/lib/ArtistClass.ts). 
The uploaded imgs are stored at cloudinary. The value of `artists.tattoos` is an array with the public IDs of the uploaded pictures.

### TypeScript
This is my first time using TypeScript. I typed component props in the beginning of every component file. The `ArtistInterface` (declared [here](https://github.com/onebarloop/capstone-project/blob/main/lib/ArtistClass.ts)) is imported in many places - its an extension of the `ArtistClass` 

## FEEDBACK!
You are very welcome to comment on my usage of TypeScript and the genral structure and codequality of my app! I am a beginner after all, so I really appreciate feedback!

**Have a wonderful day** 🦄

---
> Never don't give up

— a shitty tattoo
