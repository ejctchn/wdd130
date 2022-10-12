function func()
{
    let n = document.getElementById('name').value;
    let q = document.getElementById('question').value;

    let final = "<br> Thank you " + n + " for your question. See your question below. <br> '" + q + "'";
    document.getElementById('question').outerHTML = final;
}