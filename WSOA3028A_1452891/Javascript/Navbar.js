var TheoryBlogPosts = [
    {title: "Readings from Jorge Luis Borges.", date: new Date('2021/03/12'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG1/Blog 1.html'},
    {title: "Promise and peril of UGC.", date: new Date('2021/03/19'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG2/Blog 2.html'},
    {title: "Semantic Markup?", date: new Date('2021/03/26'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG3/Blog 3.html'},
    {title: "Medium is the Message.", date: new Date('2021/04/02'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG4/Blog 4.html'},
    {title: "Importance of Accessibility.", date: new Date('2021/04/09'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG5/Blog 5.html'},
    {title: "Tools I use for Web Development.", date: new Date('2021/04/09'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BONUS BLOG 1/Bonus Blog 1.html'},
    {title: "Norman Doors and Web Design?", date: new Date('2021/04/16'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG6/Blog 6.html'},
    {title: "Usability on the Internet!", date: new Date('2021/04/23'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG7/Blog 7.html'},
    {title: "The Digital Divide!", date: new Date('2021/04/30'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG8/Blog 8.html'},
    {title: "Study of Information Geographies!", date: new Date('2021/05/24'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG9/Blog 9.html'},
    {title: "Ethical Implementation of UX/UI", date: new Date('2021/05/31'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG10/Blog 10.html'},
    {title: "Analysis of my own UX and UI", date: new Date('2021/06/07'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG11/Blog 11.html'},
    {title: "Fama.io and its ethical issues", date: new Date('2021/06/14'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG12/Blog 12.html'},
    {title: "Reflection on Implicit Bias test", date: new Date('2021/06/21'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG13/Blog 13.html'},
    {title: "APIs and my implementation!", date: new Date('2021/06/28'), href: '/WSOA3028A_1452891/Blogs/Theory Blogs/BLOG14/Blog 14.html'},
]

var CharacterBlogPosts = [
    {title: "Wireframes and Design", date: new Date('2021/03/26'), href: '/WSOA3028A_1452891/Blogs/Character Blogs/Wireframes and Design/Wireframes.html'},
    {title: "Character description and Rationale", date: new Date('2021/03/25'), href: '/WSOA3028A_1452891/Blogs/Character Blogs/Character Rationale/Rationale.html'},
    {title: "Website Style Guide", date: new Date('2021/05/22'), href: '/WSOA3028A_1452891/Blogs/Character Blogs/Website Style Guide/StyleGuide.html'},
]

var NavItems = [
    {item: 'Home', href: '/WSOA3028A_1452891/index.html'},
    {item: 'Cooking', href: '/WSOA3028A_1452891/Cooking/CookingMain.html'},
    {item: 'Restaurants', href: '/WSOA3028A_1452891/Restaurants/RestaurantsMain.html'},
    {item: 'Theory Blogs', href: '/WSOA3028A_1452891/Blogs/Theory Blogs/TheoryBlogMain.html'},
    {item: 'Character Blogs', href: '/WSOA3028A_1452891/Blogs/Character Blogs/CharacterBlogsMain.html'},
    {item: 'About', href: '/WSOA3028A_1452891/About and Contact info/About.html'}
]

const newNavBar = document.createElement('nav');
const NavLocation = document.getElementById('NavLocation');
const NewNavList = document.createElement('ul');

const MobileMenu = document.createElement('input');
const MenuImage = document.createElement('img');
MobileMenu.type = "image";
MobileMenu.src = "/WSOA3028A_1452891/Menu.png";
MobileMenu.id = "MenuButton";
MobileMenu.classList = "Menubtn";
MobileMenu.alt="Hamburger menu icon";
//MobileMenu.appendChild(MenuImage);

function CreateNav()
{
    console.log("creating nav");

    let NavLength = NavItems.length;
    for(var i=0; i< NavLength; i++)
    {
        let NewNavItem = document.createElement('li');
        let NavItemLink = document.createElement('a');
        NavItemLink.href = NavItems[i].href;
        NavItemLink.innerHTML = NavItems[i].item;
        if(NavItems[i].item == "Theory Blogs")
        {
            NewNavItem.id = "BlogDropdown";
            CreateTheoryBlogs();
            NewNavItem.appendChild(TheoryBlogList)
        }
        else if(NavItems[i].item == "Character Blogs")
        {
            NewNavItem.id = "CharacterDropdown";
            CreateCharacterBlogs();
            NewNavItem.appendChild(CharacterBlogList);
        }
        NewNavItem.appendChild(NavItemLink);
        console.log('adding item ' + NavItems[i].item);
        NewNavList.appendChild(NewNavItem);
    }
    NewNavList.classList = "NavList";
    newNavBar.appendChild(NewNavList);
    newNavBar.appendChild(MobileMenu);
    NavLocation.appendChild(newNavBar);

}

const TheoryBlogList = document.createElement('ul')

function CreateTheoryBlogs()
{
    console.log("creating theory blogs");
    TheoryBlogList.id = "Dropdown";

    let TheoryLength = TheoryBlogPosts.length;
    for(var i=0; i<TheoryLength; i++)
    {
        let NewTheoryItem = document.createElement('li');
        let TheoryLink = document.createElement('a');
        TheoryLink.href = TheoryBlogPosts[i].href;
        TheoryLink.innerHTML = TheoryBlogPosts[i].title;
        NewTheoryItem.appendChild(TheoryLink);
        console.log("creating theory blog " + TheoryBlogPosts[i].title);
        TheoryBlogList.appendChild(NewTheoryItem);
    }
}

const CharacterBlogList = document.createElement('ul');

function CreateCharacterBlogs()
{
    console.log("creating character blogs");
    CharacterBlogList.id = "DropdownCharacter";

    let CharacterLength = CharacterBlogPosts.length
    for(var i=0; i<CharacterLength; i++)
    {
        let NewCharacterItem = document.createElement('li');
        let CharacterLink = document.createElement('a');
        CharacterLink.href = CharacterBlogPosts[i].href;
        CharacterLink.innerHTML = CharacterBlogPosts[i].title;
        NewCharacterItem.appendChild(CharacterLink);
        console.log("Creating character blog " + CharacterBlogPosts[i].title);
        CharacterBlogList.appendChild(NewCharacterItem);
    }
}

//Dropdown control for theory blogs

CreateNav();
console.log("Page loaded");

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

//Toggle for menu

const ToggleButton = document.getElementById("MenuButton");
const NavigationList = document.getElementsByClassName("NavList")[0];

ToggleButton.addEventListener('click', MenuToggle)

function MenuToggle()
{
    console.log("Menu toggled");
    if(NavigationList.classList == "NavList")
    {
        NavigationList.classList.remove("NavList");
        NavigationList.classList.add("NavListActive");
    }
    else if(NavigationList.classList == "NavListActive")
    {
        NavigationList.classList.remove("NavListActive");
        NavigationList.classList.add("NavList");
    }
}