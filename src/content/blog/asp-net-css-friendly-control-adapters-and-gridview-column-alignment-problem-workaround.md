---
title: "ASP.Net CSS Friendly Control Adapters and Gridview column alignment problem workaround"
publishDate: 2007-04-11
tags: []
draft: false
originalUrl: "https://deependrasolanky.wordpress.com/2007/04/11/asp-net-css-friendly-control-adapters-and-gridview-column-alignment-problem-workaround/"
---
ItemStyle-HorizontalAlign property is used
for alignment of any column in ASP.Net Gridview control. But when I
have used ASP.Net CSS Friendly Control Adapters 1.0 with Gridview
control this property did not work. Whatever alignment I have used,
it was having no effect on the gridview rendering in the browser.
Then…

…I have looked into ASP.Net CSS
Friendly Control Adapters official forum and found the following
thread

[http://forums.asp.net/thread/1609648.aspx](http://forums.asp.net/thread/1609648.aspx)

The problem in the thread was not same but I have found the
solution of my problem by taking help of that. The solution is as
following –

(Assuming that you are also using the Basic theme comes with the
adapters)

1\. Make a new class in GridViewExample.css file (located at
App\_Themes/Basic folder) as –

PrettyGridView .AspNet-GridView table tbody tr td.**leftalign**

{

text-align:left;

}

2\. In the Gridview make changes as following –

<asp:BoundField ItemStyle-CssClass=”**leftalign**” DataField=”xxxx”
HeaderText=”xxxx” />

And you are done.

I am not sure that this is the right way or not but at least my
problem has been solved (after hours of effort).
