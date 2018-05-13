export function loadMore(e,cd) {
    e.addEventListener('scroll', function () {
        let { scrollTop, clientHeight } = e;
        if(scrollTop > clientHeight){
            cd();
        }
    })
}
export function load(e,cd) {
    let timer;
    e.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            let { scrollTop, scrollHeight, offsetHeight } = e;
            if (scrollTop + offsetHeight + 20 > scrollHeight) {
                cd();
            }
        }, 30);
    })
}
export function pullRefresh(ele, cb) {
    // 当前content距离顶部的高度
    let disY = ele.offsetTop; // 56;
    let y = 0; // 记录拉取了多少
    ele.addEventListener('touchstart', function (e) {
        let startY = e.touches[0].pageY;
        function touchmove(e) {
            let moveY = e.touches[0].pageY;
            y = moveY - startY;
            if (y > 0) {
                if (y >= 70) {
                    y = 70;
                }
                // 给元素设置位移
                ele.style.top = disY + y + 'px';
            } else {
                // 删除事件
                ele.removeEventListener('touchmove', touchmove)
                ele.removeEventListener('touchend', touchend)
            }
        }
        function touchend() {
            // 删除绑定的事件
            let timer;
            if (y < 70) {
                ele.style.top = disY + 'px';
            }
            if (y === 70) {
                // 说明达到刷新的要求了
                timer = setInterval(function () {
                    y--;
                    if (y <= 0) {
                        clearInterval(timer);
                        cb(); // 刷新数据
                        return ele.style.top = disY + 'px';
                    }else{
                        ele.style.top = disY + y + 'px';
                    }
                }, 15);
            }
            ele.removeEventListener('touchmove', touchmove)
            ele.removeEventListener('touchend', touchend)
        }
        ele.addEventListener('touchmove', touchmove);
        ele.addEventListener('touchend', touchend);
        // 1.先判断当前是否再定点 而且是否已经下拉刷新中了
        if (!(ele.scrollTop === 0 && ele.offsetTop === disY)) {
            ele.removeEventListener('touchmove', touchmove);
            ele.removeEventListener('touchend', touchend);
        }
    });
}