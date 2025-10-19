function ChangeOption(){
    const select = document.getElementById('choices');
    const value = select ? select.value : '';
    const MainTextElement = document.getElementById('MainText');
    const label100g = document.getElementById('label-100g');

    if(value === 'Kalorii'){
        MainTextElement.innerText = 'Калкулатор за калории';
        if(label100g) label100g.innerText = 'Калории во 100г';
    } else if(value === 'Proteini'){
        MainTextElement.innerText = 'Калкулатор за протеини';
        if(label100g) label100g.innerText = 'Протеини во 100г';
    } else{
        MainTextElement.innerText = 'Нутриционален Калкулатор';
        if(label100g) label100g.innerText = 'Калории во 100г';
    }

}

function ChangeColor(){
    const el = document.getElementById("test");
    if(el) el.style.color = "red";
}

function Calculate(){
    const select = document.getElementById('choices');
    const value = select ? select.value : null;

    const n1 = parseFloat(document.getElementById('cal-in-100g').value) || 0;
    const n2 = parseFloat(document.getElementById('input-g').value) || 0;
    const sum = (n1 / 100) * n2;

    let unit = 'калории';
    if(value === 'Proteini') unit = 'г протеини';

    document.getElementById('result').innerText = 'Има ' + sum.toFixed(2) + ' ' + unit;
}