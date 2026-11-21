const fs=require('fs');
let src=fs.readFileSync(__dirname+'/run.js','utf8');
// reaproveita funções: corta o bloco principal
src=src.slice(0,src.indexOf('(async () => {'));
eval(src+`
(async()=>{
 const browser=await chromium.launch();
 let {ctx,page}=await mk(browser,{width:1366,height:768});
 await page.goto(PROF); await page.click('[data-act=roleAluno]'); await page.click('[data-act=pick][data-id=davi]'); await page.click('#demo');
 // debug 4.5 de várias formas
 for (const modo of ['clicar-imagem','clicar-depois','selecionar-tudo']){
  await ev(page,()=>{V.mod=4;V.les=5;V.step=1;V.view='lesson';V.errs=0;render();});
  await page.click('#paper'); await caretEnd(page,'w-p1'); await page.click('#ribbon [data-img]');
  const svg=page.locator('#paper svg').first();
  if(modo==='clicar-imagem'){await svg.click();}
  if(modo==='clicar-depois'){const b=await svg.boundingBox(); await page.mouse.click(b.x+b.width+20,b.y+b.height/2);}
  if(modo==='selecionar-tudo'){await page.keyboard.press('Control+A');}
  await page.click('#ribbon [data-cmd=justifyCenter]');
  const info=await ev(page,()=>{const s=document.querySelector('#paper svg');return {html:document.getElementById('paper').innerHTML.replace(/<svg[\\s\\S]*?<\\/svg>/g,'<svg/>'),parent:s&&s.parentElement.outerHTML.replace(/<svg[\\s\\S]*?<\\/svg>/g,'<svg/>'),ta:s&&getComputedStyle(s.parentElement).textAlign,done:document.querySelectorAll('.task.done').length}});
  L('4.5 modo',modo,JSON.stringify(info));
 }
 await page.screenshot({path:SHOTS+'word-img.png'});
 for(const [m,n] of [[4,6],[5,8],[6,7],[7,5]]){
  for(let l=(m===4?5:1);l<=n;l++){const r=await doLesson(page,m,l); L('Aula '+m+'.'+l+': '+(r.ok?'OK '+r.stars+'★':'FALHOU')+' '+((r.issues||[]).join(' ; '))+(r.why||''));}
 }
 for(const m of [4,5,6,7]){ L('Teste '+m+': '+await doTest(page,m)); }
 await ev(page,()=>{V.view='home';render();});
 const cb=page.locator('[data-act=cert]'); L('cert botões',await cb.count());
 if(await cb.count()){await cb.first().click(); L('Cert:',(await page.locator('.cert').innerText()).replace(/\\n/g,' '));await page.screenshot({path:SHOTS+'cert.png'});}
 // leave modal
 await ev(page,()=>{V.mod=1;V.les=1;V.step=2;V.view='lesson';render();});
 await page.click('.crumb [data-act=openMod]'); L('modal sair aparece:',await page.locator('.modal').count());
 await page.click('[data-act=leaveyes]'); L('após sair view',await ev(page,()=>V.view));
 // home crumb inside lesson leaves without modal?
 await ev(page,()=>{V.mod=1;V.les=1;V.step=2;V.view='lesson';render();});
 L('erros',JSON.stringify(page.errs.filter(e=>!e.includes('ERR_FAILED'))));
 await browser.close();
})();`);
