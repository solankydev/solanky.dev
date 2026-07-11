---
title: "Error 1718. *.msp did not pass the digital signature check"
publishDate: 2007-03-09
tags: []
draft: false
originalUrl: "https://deependrasolanky.wordpress.com/2007/03/09/error-1718-msp-did-not-pass-the-digital-signature-check/"
---
Visual Studio 2005 Service Pack 1
Install Problem: “Error 1718. \*.msp did not pass the digital
signature check “

I was trying to install the Visual Studio 2005 Service Pack 1 on
Visual Studio 2005 Standard Edition on Windows Server 2003 but
after around 10 minutes the installation stops throwing the
following error:

**“Error 1718. File 5fc5ca.msp did not pass the digital
signature check”**

\> > (The file name might be different for your
installation.)

I have searched Google for the same and found the following
workaround.

\> >

2.  Click Start, click Run, type control admintools, and then
    click OK.

4.  Double-click Domain Security Policy (Local Security
    Policy).

6.  Click Software Restriction Policies. If no software
    restrictions are listed, right-click Software Restriction Policies,
    and then click Add New Policy.

8.  Under Object Type, double-click Enforcement.

10.  Click All users except local administrators, and then click
     OK.

12.  Restart the computer.

14.  Install the Service Pack.

Microsoft has also addressed this issue in Knowledge Base Article.

\> > [http://support.microsoft.com/kb/925336](http://support.microsoft.com/kb/925336)

\> >
