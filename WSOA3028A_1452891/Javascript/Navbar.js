/*var BlogPosts = [
    {title: "Readings from Jorge Luis Borges", date: new Date('2021/03/12'), href: './Blogs/Theory Blogs/BLOG1/Blog 1.html'},
    {title: "Promise and peril of UGC", date: new Date('2021/03/19'), href: './Blogs/Theory Blogs/BLOG2/Blog 2.html'},
]

To implement dynamic navbar and navigation --> a W.I.P
*/

//Dropdown control for theory blogs
document.getElementById("BlogDropdown").addEventListener("mouseenter", OpenMenuTheory);
document.getElementById("BlogDropdown").addEventListener("mouseleave", CloseMenuTheory);

function OpenMenuTheory()
{
    document.getElementById("Dropdown").classList.add("DropdownActive");
}

function CloseMenuTheory()
{
    console.log("Theory");
    document.getElementById("Dropdown").classList.remove("DropdownActive");
    document.getElementById("BlogDropdown").classList.add("DropdownInactive");
}

//Dropdown control for character blogs
document.getElementById("CharacterDropdown").addEventListener("mouseenter", OpenMenuCharacter);
document.getElementById("CharacterDropdown").addEventListener("mouseleave", CloseMenuCharacter);

function OpenMenuCharacter()
{
    document.getElementById("DropdownCharacter").classList.add("DropdownActive");
}

function CloseMenuCharacter()
{
    console.log("close");
    document.getElementById("DropdownCharacter").classList.remove("DropdownActive");
    document.getElementById("CharacterDropdown").classList.add("DropdownInactive");
}

