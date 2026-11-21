import sys
meses=["Dez/26","Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
S={
 "pess":dict(fund=5,col=3,conv=.5,inad=.15,al=[0,0,8,10,11,12,12,11,13,14,15,15,14]),
 "real":dict(fund=8,col=6,conv=.6,inad=.10,al=[0,0,14,18,21,23,24,24,27,29,31,32,32]),
 "otim":dict(fund=10,col=10,conv=.7,inad=.05,al=[0,0,20,26,30,33,35,36,39,42,44,46,46]),
}
X=float(sys.argv[1]) if len(sys.argv)>1 else .5
KIT=float(sys.argv[2]) if len(sys.argv)>2 else 0   # custo do kit por novo aluno
P=150; TAX=.06; WAVE=1960; CAP=5000; COLCH=1500
for k,s in S.items():
  F=s["fund"]; fundo=0; oper=0; inst=0; nb=2; prev=0; tot_rec=tot_marg=0
  print(f"== {k} X={X} kit={KIT}")
  for i,m in enumerate(meses):
    al=s["al"][i]
    if i==0: mens=F*300; ent=F*50; newk=F
    elif i==1: mens=0; ent=s["col"]*120; newk=0
    else:
      pay=al-F if i==2 else al
      mens=pay*P*(1-s["inad"])
      base=F+round(s["col"]*s["conv"]) if i==2 else prev
      new=max(0,al-base); ent=new*100; newk=new + (round(s["col"]*s["conv"]) if i==2 else 0)
    prev=al
    rec=mens+ent
    gio=[0,200]+[481]*11
    cust=gio[i]+rec*TAX+(0 if i==0 else 30)+100+newk*KIT
    marg=rec-cust
    tot_rec+=rec; tot_marg+=marg
    ent_liq=ent*(1-TAX)-newk*KIT
    mm=marg-ent_liq  # margem das mensalidades
    if i==0: # prepago fica no operacional
      fundo+=ent_liq; oper+=mm; ap=ent_liq
    else:
      if mm>0:
        tofund = X*mm if fundo<CAP else 0
        rest=mm-tofund
        fundo+=ent_liq+tofund; ap=ent_liq+tofund
        if oper<COLCH: add=min(rest,COLCH-oper); oper+=add; rest-=add
        inst+=rest
      else:
        fundo+=ent_liq; ap=ent_liq; oper+=mm
    compra=""
    nxt=s["al"][i+1] if i+1<len(meses) else al
    while nxt/(nb*11)>0.70 and fundo>=WAVE:
      fundo-=WAVE; nb+=2; compra+=f"+2 Basicas(->{nb}) "
    print(f"{m:6} al={al:3} rec={rec:6.0f} cust={cust:5.0f} marg={marg:6.0f} aporte={ap:6.0f} fundo={fundo:6.0f} oper={oper:6.0f} inst={inst:6.0f} nb={nb} ocup={al/(nb*11):.0%} {compra}")
  print(f"TOTAL rec={tot_rec:.0f} marg={tot_marg:.0f}")
