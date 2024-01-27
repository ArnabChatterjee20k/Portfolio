---
title: "PickPalette"
description: "A SaaS tool for colors"
tags: ["React","Deno","Supabase","Langchain"]
image: "./images/Pickpalette.png"
githublink: "https://pickpalette.netlify.app/"
liveurl: "https://www.producthunt.com/products/pickpalette#pickpalette"
---
# PickPalette and its features
A state-of-the-art design tool tailored for imaginative brains is called PickPalette. Fundamentally, this initiative transforms the design experience by skillfully creating eye-catching color palettes from photographs. PickPalette is a platform for inspiration that provides a wide range of color schemes for experimentation, meeting the ever-changing demands of designers.
Easily create colors from photos, experiment with different color schemes, and manage palettes effectively with a dynamic dashboard are some of the key features. The new AI tool from PickPalette, which promises to transform color palette choices, is what makes it unique. This tool will enhance the design process using artificial intelligence by offering personalized suggestions based on application headlines and taglines.

<div className="dark:bg-black bg-slate-300 dark:text-white text-black shadow-sm" style="border-left: 6px solid #3498db; padding: 10px;">
    <p>This project is open source and actively maintained.If you wanna contribute feel free to raise a issue or a pr</p>
</div><br/>

# Learnings
Throughout the journey of building PickPalette, launching it on Product Hunt has been a transformative experience, offering firsthand insights from actual users. The primary lesson learned revolves around adopting a user-centric approach in project development, leading to a UX-driven methodology that prioritizes user needs and preferences.

On the technical front, key learnings include implementing native programming to scan images for pixel values, constructing automated scraping pipelines for data transformation, and leveraging an algorithmic approach to optimize processes, such as using a priority-based recursive algorithm for the efficient autosaving feature in the palette dashboard.

Exploration extended to state management tools like Zustand, integration with async libraries like Tanstack Query, and the utilization of Langchain and generative AI to power apps with a contextful pipeline. Security measures were implemented, including API interfaces and key handling. Notably, the app relies on Supabase edge functions, reinforcing an understanding of serverless architecture.

Furthermore, a sentiment-based user review system was developed, reflecting user emotions in the feedback section. Overall, the project provided a holistic learning experience, marrying technical prowess with a keen understanding of user-centric design principles.