// let str = `[ut_one_fourth  effect='fadeInDown'][caption  caption='Brandy' width='248']
//   <a href='/#section-contact' class='brandi staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Carl' width='248' ]
//   <a href='/#section-contact' class='carl staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Charles' width='248' ]
//   <a href='/#section-contact' class='charles staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth_last effect='fadeInDown'][caption  caption='Chris' width='248']
//   <a href='/#section-contact' class='chris_s staff' ></a>
//   [/caption][/ut_one_fourth_last]
//
//
//
//
//
//   [ut_one_fourth  effect='fadeInDown'][caption  caption='Conor' width='248']
//   <a href='/#section-contact' class='conor2 staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='David' width='248']
//   <a href='/#section-contact' class='david staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Jamie' width='248']
//   <a href='/#section-contact' class='jamie staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth_last effect='fadeInDown'][caption  caption='Jessica' width='248']
//   <a href='/#section-contact' class='jessica staff' ></a>
//   [/caption][/ut_one_fourth_last]
//
//
//
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Josh' width='248']
//   <a href='/#section-contact' class='josh staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Justin' width='248' ]
//   <a href='/#section-contact' class='justin staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Justin' width='248' ]
//   <a href='/#section-contact' class='justin-p staff' ></a>
//   [/caption][/ut_one_fourth]
//
//
//   [ut_one_fourth_last effect='fadeInDown'][caption  caption='Kat' width='248' ]
//   <a href='/#section-contact' class='kat staff' ></a>
//   [/caption][/ut_one_fourth_last]
//
//
//
//
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Katie' width='248']
//   <a href='/#section-contact' class='katie staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Kayla' width='248']
//   <a href='/#section-contact' class='kayla staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Kyle' width='248']
//   <a href='/#section-contact' class='kyle staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth_last effect='fadeInDown'][caption  caption='Matt' width='248']
//   <a href='/#section-contact' class='matt2 staff' ></a>
//   [/caption][/ut_one_fourth_last]
//
//
//
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Matt' width='248']
//   <a href='/#section-contact' class='mattp staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Meg' width='248']
//   <a href='/#section-contact' class='meg staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Michael' width='248']
//   <a href='/#section-contact' class='michael staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth_last effect='fadeInDown'][caption  caption='Mike' width='248' ]
//   <a href='/#section-contact' class='mike staff' ></a>
//   [/caption][/ut_one_fourth_last]
//
//
//
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Mike' width='248']
//   <a href='/#section-contact' class='mike-v staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Robbie' width='248']
//   <a href='/#section-contact' class='robbie staff' ></a>
//   [/caption][/ut_one_fourth]
//
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Sam' width='248']
//   <a href='/#section-contact' class='sam staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth_last effect='fadeInDown'][caption  caption='Sara' width='248']
//   <a href='/#section-contact' class='sara staff' ></a>
//   [/caption][/ut_one_fourth_last]
//
//
//
//
//
//
//
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Scott' width='248']
//   <a href='/#section-contact' class='scott staff' ></a>
//   [/caption][/ut_one_fourth]
//
//
//   [ut_one_fourth  effect='fadeInDown'][caption  caption='Scott' width='248']
//   <a href='/#section-contact' class='scott2 staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth effect='fadeInDown'][caption  caption='Shawn' width='248']
//   <a href='/#section-contact' class='shawn staff' ></a>
//   [/caption][/ut_one_fourth]
//
//   [ut_one_fourth_last effect='fadeInDown'][caption  caption='Stephen' width='248' ]
//   <a href='/#section-contact' class='stephen staff' ></a>
//   [/caption][/ut_one_fourth_last]
//
//
//
//
//
//   [ut_one_fourth_last effect='fadeInDown'][caption  caption='Zack' width='248' ]
//   <a href='/#section-contact' class='zack staff' ></a>
//   [/caption][/ut_one_fourth_last]
//   `;
// let nameStr = "Brandy Carl Charles Chris Conor David Jamie Jessica Josh Justin Justin Kat Katie Kayla Kyle Matt Matt Meg Michael Mike Mike Robbie Sam Sara Scott Scott Shawn Stephen Zack";

document.getElementById('submit').addEventListener('click', start);
document.getElementById('copy').addEventListener('click', copy);

function start(){
  let nameStr = document.getElementById('input').value;
  function createList(name){
    let finalProduct = [];
    let nameArr = nameStr.split(' ').sort();
    for (let i = 0; i < nameArr.length; i++){
      const endTag = ((i+1) % 4 === 0) || (i === nameArr.length-1) ? "[/ut_one_fourth_last]" : "[/ut_one_fourth]";
      const startTag = ((i+1) % 4 === 0) || (i === nameArr.length-1) ? "[ut_one_fourth_last" : "[ut_one_fourth";
      //caption part
      const cap = nameArr[i];
      if (cap === '' || cap === ' ') continue;
      //exception for brandy for uknown reason
      let className = (cap === 'Brandy')  ? 'brandi' : cap.toLowerCase();

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
