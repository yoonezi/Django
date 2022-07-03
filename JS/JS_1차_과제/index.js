window.onload = function(){
    document.getElementById("add-button").addEventListener("click", addNum);
}

function addNum() {
    // 내용 만들기
    let num = document.getElementById("schedule").value;
    // 날짜에 현재 날짜 넣기
    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    // 최종 날짜 
    let day = (year + '/' + month + '/' + date)
    // 체크박스 만들기
    let check = document.createElement("INPUT")
    check.setAttribute("type","checkbox")

    // 열 만들기
    let todo_date = document.createElement('td');
    let todo_num = document.createElement('td');
    let todo_done = document.createElement('td');
    // 열안에 값 넣기
    todo_date.innerText = day;
    todo_num.innerText = num;
    todo_done.appendChild(check);
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




