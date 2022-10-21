function func()
{
    let n = document.getElementById('name').value;
    let q = document.getElementById('question').value;
    let e = document.getElementById('email').value;

    let final = "<br> Thank you " + n + " for your question. We will get back with you soon. Receipt sent to: <br> " + e;
    document.getElementById('question').outerHTML = " ";
    document.getElementById('name').outerHTML = final;
    document.getElementById('email').outerHTML = " ";
    document.getElementById('sub').outerHTML = " ";
}