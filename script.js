
document.getElementById('submit').addEventListener('click', start);
document.getElementById('copy').addEventListener('click', copy);

function start(){
  let nameStr = document.getElementById('input').value;
  function createList(name){
    let finalProduct = [];
    let nameArr = nameStr.toLowerCase().split(' ').sort();
    for (let i = 0; i < nameArr.length; i++){
      const endTag = ((i+1) % 4 === 0) || (i === nameArr.length-1) ? "[/ut_one_fourth_last]" : "[/ut_one_fourth]";
      const startTag = ((i+1) % 4 === 0) || (i === nameArr.length-1) ? "[ut_one_fourth_last" : "[ut_one_fourth";
      //caption part
      let cap = nameArr[i];
      cap = cap.replace(/^\w/, c => c.toUpperCase());
      if (cap === '' || cap === ' ') continue;
      //exception for brandy for uknown reason
      let className = cap.toLowerCase();

      if (finalProduct.join('').includes(className)) className = className+'2';
      //checks for repeats but only 2. if theres three, we have problems.

      finalProduct.push(`
        ${startTag} effect='fadeInDown'][caption caption='${cap}' width='248']
        <a href='/#section-contact' class='${className} staff' ></a>
        [/caption]${endTag}
        `);
      }
      document.getElementById('finalProduct').value = finalProduct.join('');
    }
    createList(nameStr)

}

function copy(){
  const target = document.getElementById('finalProduct');
  const btn = document.querySelector('.Copy');
  target.select();
  document.execCommand('copy');
  btn.innerText = 'COPIED!';
  setTimeout(()=>btn.innerText = 'Copy to clipboard', 2000)
}
