window.onload = function(){
    document.getElementById("add-button").addEventListener("click", addNum);
    document.getElementById("schedule").setAttribute("onkeyup","enterkey()")
}

function addNum() {
    // 내용 만들기
    let num = document.getElementById("schedule").value;
    const now = new Date();
    // 날짜에 현재 날짜 넣기
    function getToday(){
        let date = new Date();
        let yyyy = date.getFullYear();
        let mm = date.getMonth()+1;
        let dd = date.getDate();

        if (mm < 10)
            mm = "0" + mm;
        if (dd < 10)
            dd = "0" + dd;
            
        return yyyy + "." + mm + "." +dd;
        console.log(moment(). format('yyyy년 mm 월 dd 일'));
    }

    // 최종 날짜 
    // let day = (year + '/' + month + '/' + date)
    // 체크박스 만들기
    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click",function(){
        
        if (!confirm("삭제하시겠습니까?")) {
            checkbox.checked = false;
        } else {
            checkbox.parentNode.parentNode.remove();
        }
    });

    // 열 만들기
    let todo_date = document.createElement('td');
    let todo_num = document.createElement('td');
    let todo_done = document.createElement('td');
    // 열안에 값 넣기
    todo_date.innerText = now;
    todo_num.innerText = num;
    todo_done.appendChild(checkbox);
    // 행 만들기
    let row = document.createElement('tr');
    // 헹에 열 넣기
    row.appendChild(todo_date);
    row.appendChild(todo_num);
    row.appendChild(todo_done);
    // 테이블 가져오기
    let table = document.getElementsByClassName("table__table");
    // 테이블에 행 넣기
    table[0].appendChild(row);
    // 삭제
    document.getElementById("schedule").value = '';
}


function enterkey() {
	if (window.event.keyCode == 13) {
    	addNum()
    }
}

