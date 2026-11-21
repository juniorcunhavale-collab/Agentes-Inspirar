const fs=require('fs');
let src=fs.readFileSync(__dirname+'/run.js','utf8');
src=src.slice(0,src.indexOf('(async () => {'));
eval(src+`
(async()=>{
 const browser=await chromium.launch();
 let {ctx,page}=await mk(browser,{width:1366,height:768});
 await page.goto(PROF); await page.click('[data-act=roleAluno]'); await page.click('[data-act=pick][data-id=davi]'); await page.click('#demo');
 for(const keys of [['ArrowDown'],['ArrowRight'],['End','ArrowDown'],['Control+End']]){
  await ev(page,()=>{V.mod=4;V.les=5;V.step=1;V.view='lesson';V.errs=0;render();});
  await page.click('#paper'); await caretEnd(page,'w-p1'); await page.click('#ribbon [data-img]');
  for(const k of keys) await page.keyboard.press(k);
  await page.click('#ribbon [data-cmd=justifyCenter]');
  L(keys.join('+'),'-> tarefas feitas',await page.locator('.task.done').count(),'/2');
 }
 // tutor sem 'Giovana'; checar texto 'Tutora Marina' no app aluno
 const a=fs.readFileSync(SP+'/aluno/stripped.html','utf8'); L('Aluno artifact contém roleTutor UI acessível?', /vLoginAluno/.test(a), 'pais acessível no aluno?', 'só via __ALUNO__ -> vLoginAluno');
 await browser.close();
})();`);
