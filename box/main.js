document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('#box');
    const btnRight = document.querySelector('#btnRight');
    const btnLeft = document.querySelector('#btnLeft');
    const btnUp = document.querySelector('#btnUp');
    const btnDown = document.querySelector('#btnDown');


    //For Radius buttons comment by me bro Authorr
    const RightUp = document.querySelector('#RightUp');
    const LeftUp = document.querySelector('#LeftUp');
    const RightDown = document.querySelector('#RightDown');
    const LeftDown = document.querySelector('#LeftDown');

    

    btnRight.addEventListener('click', function() {
        toggleBorder('right');
    });

    btnLeft.addEventListener('click', function() {
        toggleBorder('left');
    });

    btnUp.addEventListener('click', function() {
        toggleBorder('up');
    });

    btnDown.addEventListener('click', function() {
        toggleBorder('down');
    });

    function toggleBorder(direction) {
        switch(direction) {
            case 'right':
                box.style.borderRight = borderRemoved ? 'none' : '2px solid black';
                break;
            case 'left':
                box.style.borderLeft = borderRemoved ? 'none' : '2px solid black';
                break;
            case 'up':
                box.style.borderTop = borderRemoved ? 'none' : '2px solid black';
                break;
            case 'down':
                box.style.borderBottom = borderRemoved ? 'none' : '2px solid black';
                break;
            default:
                break;
        }
        borderRemoved = !borderRemoved;
    }

    let borderRemoved = false; //  border removal



//-------------------

RightUp.addEventListener('click', function() {
    ImportRadius('rightup');
});

LeftUp.addEventListener('click', function() {
    ImportRadius('leftup');
});

RightDown.addEventListener('click', function() {
    ImportRadius('rightdown');
});

LeftDown.addEventListener('click', function() {
    ImportRadius('leftdown');
});

function ImportRadius(corner){
    switch(corner) {
        case'rightup':
        box.style.borderTopRightRadius = box.style.borderTopRightRadius === '30px' ? '0' : '30px';
            break;
        case'leftup':
            box.style.borderTopLeftRadius = box.style.borderTopLeftRadius === '30px' ? '0' : '30px';
            break;
        case'rightdown':
            box.style.borderBottomRightRadius = box.style.borderBottomRightRadius === '30px' ? '0' : '30px';
            break;
        case'leftdown':
            box.style.borderBottomLeftRadius = box.style.borderBottomLeftRadius === '30px' ? '0' : '30px';
            break;
    }
        
         }





});

