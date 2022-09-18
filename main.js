    (function() {        
    var doc = document.documentElement;
    var w = window;

    var curScroll = prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = prevDirection = 0;
    var threshold = window.innerHeight*.25;

    var header = document.getElementById('header');

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop
        
        if (curScroll > prevScroll) {
            curDirection = 1;
        }
        else if (curScroll < prevScroll) {
            curDirection = -1;
        }

        if (curScroll != curDirection) {
            show = showHeader();
        }

        prevDirection = curDirection;

        prevScroll = curScroll;
    };

    var showHeader = function() {
        if (curDirection == 1 && curScroll > threshold) {
            header.classList.add('hide');
        } else if (curDirection == -1) {
            header.classList.remove('hide');
        }
    };

    window.addEventListener('scroll', checkScroll);
})();

var tutorial_index = {
    'nearby': 0,
    'timeline': 0,
    'profile_preview': 0,
    'profile': 0
};

var tutorial_img = {
    'nearby': ['nearby_tut_1.png', 'nearby_tut_2.png', 'nearby_tut_3.png', 'nearby_tut_4.png'],
    'timeline': ['timeline_tut_1.png', 'timeline_tut_2.png', 'timeline_tut_3.png', 'timeline_tut_4.png'],
    'profile_preview': ['profile_preview_tut_1.png', 'profile_preview_tut_2.png', 'profile_preview_tut_3.png', 'profile_preview_tut_4.png'],
    'profile': ['profile_tut_1.png', 'profile_tut_2.png', 'profile_tut_3.png']
}

var directory = '../media/'

function nextTutorial(id) {
    var type = (id.slice(0, -5));
    var direction = id.slice(-4);

    if (direction == 'next') {
        tutorial_index[type]++;
        if (tutorial_index[type] > tutorial_img[type].length-1) {tutorial_index[type] = 0};
        document.getElementById(type+'_tut').src = directory+tutorial_img[type][tutorial_index[type]];
    }

    if (direction == 'prev') {
        tutorial_index[type]--;
        if (tutorial_index[type] < 0) {tutorial_index[type] = tutorial_img[type].length-1};
        document.getElementById(type+'_tut').src = directory+tutorial_img[type][tutorial_index[type]];
    }
};