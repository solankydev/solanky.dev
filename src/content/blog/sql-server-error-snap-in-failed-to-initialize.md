---
title: "SQL Server Error – Snap-in failed to initialize."
publishDate: 2007-03-03
tags: []
draft: false
originalUrl: "https://deependrasolanky.wordpress.com/2007/03/03/sql-server-error-snap-in-failed-to-initialize/"
---
Snap-in failed to initialize.

Name:<unknown>

CLSID:{00100100-1816-11D0-8EF5-00AA0062C58F}

I was having SQL Server 2000
and SQL Server 2005 Express Edition installed on my computer
without any problem. Yesterday I have uninstalled the SQL
Server 2005 Express Edition and shut down my computer. But today
when I click on Enterprise Manager shortcut the problem started, a
popup has flashed in front of my eyes –

Snap-in
failed to initialize.

Name:<unknown>

CLSID:{00100100-1816-11D0-8EF5-00AA0062C58F}

Everything was working well
like Query Analyzer etc. I was able to access the database in the
asp.net code. Then I have searched a lot about it on Google and
after trying many suggestions I have found the solution here
–

[
http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=397541&SiteID=1](http://forums.microsoft.com/MSDN/ShowPost.aspx?PostID=397541&SiteID=1)

Thanks to Alfred who has
posted the solution in the forum.

The solution is follwing
–

1.
Click Start, click Run, type regedit, and then click
OK.

2\. Locate
the following registry subkey:

**
HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Microsoft SQL
Server\\80\\Tools\\ClientSetup**

3.
Right-click the ClientSetup registry subkey, point to New, and then
click String Value.

4.
Rename the registry subkey that you just created
**SqlPath**,
and then press ENTER.

5.
Double-click the SqlPath registry subkey, and then
type **C:\\Program
**
**
Files\\Microsoft SQL Server\\80\\Tools** in the
Value data box.

6.
Click OK, and then close Registry Editor.

7.
Click Start, click Run, type `regsvr32 "C:\\Program Files\\Microsoft SQL Server\\80\\Tools\\Binn\\sqlmmc.dll"`, and then click
OK.
