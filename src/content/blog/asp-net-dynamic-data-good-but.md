---
title: "ASP.NET Dynamic Data – Good but …"
publishDate: 2010-06-25
tags: []
draft: false
originalUrl: "https://deependrasolanky.wordpress.com/2010/06/25/asp-net-dynamic-data-good-but/"
---
Recently a new assignment came to me in which we have to develop one web application very fast. It was a Survey application and we have to capture the hard copy survey forms into database for analysis purpose. Most of our developers know only ASP.NET web forms and for data access we use stored procedures most of the time. I have looked for Rapid Application Development (RAD) options in ASP.NET  and first thing that came to mind was Dynamic Data. I have never worked on it but I knew that it is the de-facto framework for RAD in ASP.NET world for simple CRUD applications. As it was new for me I have decided to give two days for exploring it whether it can be used or not in our survey application.

In starting I created a simple table, generated dbml files using LINQ to SQL and it was magic everywhere. I was able to do CRUD work in no time in a nice user interface. Later when I have added more tables some issues came but I have solved them by searching on Google and reading blogs. I was able to create partial classes so that foreign keys can return proper value not just the first character field in the table and to change the metadata so that my displayed field names were different from the column name. I have decided that it will work.

But I faced problem when I have tried to customize the UI. For example –

-   how to add a radio button with yes/no, male/female options ?

-   how to bind a dropdown to static values instead of database ?


-   depending upon the answer of previous question how to show/hide next question ?


These were some issues in starting which I was not able to solve, may be due to my less knowledge of Dynamic Data. Although I have found some good blogs (like – [Stephen Naughton (C# Bits)](http://csharpbits.notaclue.net/) who has in-depth knowledge of dynamic data) but I realized  that I have to learn a lot of thing and have to invest a lot of time if I want a lot of customization in UI. So finally I have dropped that idea of using Dynamic Data  and looked for other options. ASP.NET MVC was an option but there were two main reasons against this – my team have no experience of it and it’s a better option not faster. So finally now we have decided to develop this using ASP.NET web forms again but with LINQ to SQL so that we don’t have to write stored procedures and we have fully typed objects to save our time. Apart from that we will move one step forward to our ultimate goal (ASP.NET MVC) as first time we will be working on a not so great but still an ORM – LINQ to SQL.

I will try to keep you updated..
