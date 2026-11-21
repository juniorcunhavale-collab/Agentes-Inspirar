const fs=require('fs');
let src=fs.readFileSync(__dirname+'/run.js','utf8');
src=src.slice(0,src.indexOf('(async () => {'));
src=src.replace("await page.click(`td[data-ref=${ref}]`);","await page.click(`td[data-ref=${ref}]`); const s1=await page.evaluate(()=>XS.sel+'|'+(document.activeElement&&document.activeElement.id)); if(s1!==ref+'|xin'){CLICKLOST++; await page.click(`td[data-ref=${ref}]`);}");
eval('let CLICKLOST=0;'+src+`
(async()=>{
 const browser=await chromium.launch();
 let {ctx,page}=await mk(browser,{width:1366,height:768});
 await page.goto(PROF); await page.click('[data-act=roleAluno]'); await page.click('[data-act=pick][data-id=davi]'); await page.click('#demo');
 for(const [m,l] of [[5,1],[5,2],[5,3],[5,5],[5,6],[5,8],[7,3]]){CLICKLOST=0;const r=await doLesson(page,m,l); L('Aula '+m+'.'+l+' (clicando de novo quando perde): '+(r.ok?'OK':'FALHOU '+(r.issues||[]).join(';'))+' | cliques perdidos: '+CLICKLOST);}
 // imagem: clicar na imagem, End, centralizar
 await ev(page,()=>{V.mod=4;V.les=5;V.step=1;V.view='lesson';V.errs=0;render();});
 await page.click('#paper'); await caretEnd(page,'w-p1'); await page.click('#ribbon [data-img]');
 L('caret após inserir imagem está em:', await ev(page,()=>{const n=getSelection().anchorNode;return n&&(n.nodeType===1?n.outerHTML:n.parentElement.outerHTML).slice(0,80)}));
 await page.click('#ribbon [data-cmd=justifyCenter]');
 L('centralizar logo após inserir (caret no lugar):', await page.locator('.task.done').count(),'de 2', await ev(page,()=>document.getElementById('paper').innerHTML.replace(/<svg[\\s\\S]*?<\\/svg>/g,'<svg/>')));
 // Excel após digitar e apertar Tab / clicar com mouse lento
 await browser.close();
})();`);
