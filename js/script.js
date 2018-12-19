$(document).ready(function () {
    $('#navbar').load('navbar.html');
    $('#footer').load('footer.html');
    $('#nav-button-about-page').addEventListener('click', openAboutPage);

    function openAboutPage() {
        // You will want an if statement to make sure they don't reload the page if it's already up.
        // ! means opposite. (or 'not')
        if (!$('#nav-button-about-page').classList.contains('open'))
            removeNavClasses()
        $('#body').load('about.html')
        $('#nav-button-about-page').classList.add('open')
    }

    function removeNavClasses() {
        // this function removes the class from the button that was active.
    }
});

// To be honest though, all this is kinda a ton of unnecessary work for a feature you could just have in a regular static website.
// Like, it looks just like regular navigation, it acts just like regular navigation, it's just harder.

// :D
// 1. It teaches me more about fundamentals,
// 2. It teaches me to automate something that would be repeditive work.
// Yeah, that's true. Like, if that's how you want to do it, go for it. My main point is that in everything you do, your goal should really be efficiency. 
// Like, use javascript for features that really can be done better or faster with javascript.
// Then, you can use javascript to add value, rather than just for nothing.

// It's really for more efficient coding. At least that's how I was viewing it.
// I've been changing things constantly, and ever time I make a decision to change something, I have to change the code for every page.
// It's painful.

// Yeaah, I think that's a good use of it. It makes your life easier, which is adding value. I think using it for navigation makes your life harder, and adds no value.

// It can also be so the page doesn't have to load everything at once. Just the navbar and footer one time, since the only thing changing is the body.

// Think about your site this way as far as loading time goes.

// this bar represents the size of your text data that has to be loaded.
// ====
// this bar represents the size of the images that have to be loaded.
// ================================================================================================================


// Optimizing the text loading times is almost completely useless because they're so insignificantly small.
// that navbar text is like 200 bytes or something absurdly small.
// a single badly optimised image could be 2MB (Please don't use 2MB images).
// So, when it comes to optimizing, it's really about reducing the number of requests and optimizing javascript runtime.
// in this case, the extra time spent executing the javascript to load the new part of the site is probably longer than the time to load the new page. I'm not sure.
// There is other value that can be added though. For example, if you use a live load like that, you can keep the state of the page. So, if they're scrolled down, it will keep their scroll (if that's relevant)
// But, again, the nav bar is at the top, so that doesn't add any value.

// I'd say you should use a traditional page loading mechanism and use javascript to add some cool functionality like an image slideshow, or something that randomizes the stories you see on the home page.

// I paln to do that, or at least try some stuff like that out.
// I think the main reason I'd still like to do it like this is for my own sanity.

// In the long run, this is really for your own learning, so do this however you want to.

// There are a lot of things I could do with or change on the navbar and footer, so it would definitely be more efficient for me to just program it to only change only the new parts.
// Plus, I like the thought of only the body changing, instead of everything when switching pages. 

// Cool.

// So is that all the code I need?

// You'll need to write the code that removes the classes from the other nav stuff, but I think that's basically it.