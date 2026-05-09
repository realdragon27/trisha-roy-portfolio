const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Segoe UI',sans-serif;background:#0a1a1a;color:#c8e8e0;padding:12px;}
.hdr{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#085041;border-radius:8px 8px 0 0;margin-bottom:0;}
.hdr-title{font-size:14px;font-weight:600;color:#e1f5ee;}
.hdr-sub{font-size:10px;color:#9fe1cb;margin-top:2px;}
.badge{display:inline-block;font-size:10px;padding:2px 8px;border-radius:4px;font-weight:500;background:#0f6e56;color:#e1f5ee;margin-right:4px;}
.tabs{display:flex;gap:4px;background:#04342c;padding:6px 14px;flex-wrap:wrap;}
.tab{font-size:11px;padding:5px 10px;border-radius:6px;cursor:pointer;color:#9fe1cb;border:0.5px solid #0f6e56;white-space:nowrap;}
.tab.on{background:#1d9e75;color:#e1f5ee;font-weight:600;border-color:#1d9e75;}
.kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:10px 0;}
.kpi{border-radius:8px;padding:10px 12px;}
.kpi.t{background:#0a2a1a;border-left:3px solid #1d9e75;}
.kpi.a{background:#2a1a00;border-left:3px solid #ba7517;}
.kpi.r{background:#2a0a0a;border-left:3px solid #a32d2d;}
.kpi.b{background:#0a1a2a;border-left:3px solid #378add;}
.kpi.p{background:#1a0a2a;border-left:3px solid #534ab7;}
.kpi p.lb{font-size:10px;margin:0 0 2px;}
.kpi.t p.lb{color:#5dcaa5;}.kpi.a p.lb{color:#c89040;}.kpi.r p.lb{color:#c85050;}.kpi.b p.lb{color:#6090c0;}.kpi.p p.lb{color:#9090d0;}
.kpi p.vl{font-size:20px;font-weight:600;margin:0 0 1px;}
.kpi.t p.vl{color:#5dcaa5;}.kpi.a p.vl{color:#e0a040;}.kpi.r p.vl{color:#e06060;}.kpi.b p.vl{color:#60a0e0;}.kpi.p p.vl{color:#9090e0;}
.kpi p.sb{font-size:10px;color:#4a8a70;margin:0;}
.card{background:#0a2018;border:0.5px solid #0f6e56;border-radius:10px;padding:12px;}
.card h4{font-size:12px;font-weight:600;color:#9fe1cb;margin:0 0 2px;}
.card p.ax{font-size:10px;color:#4a8a70;margin:0 0 6px;}
.lg{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:6px;}
.lg span{font-size:10px;color:#5dcaa5;display:flex;align-items:center;gap:3px;}
.lg span b{width:10px;height:10px;border-radius:2px;display:inline-block;}
.bx{display:inline-block;font-size:9px;padding:2px 6px;border-radius:4px;font-weight:500;}
table{width:100%;border-collapse:collapse;font-size:11px;table-layout:fixed;}
thead tr{background:#0f3028;}
th{padding:5px 6px;text-align:left;color:#9fe1cb;font-weight:500;}
td{padding:4px 6px;color:#c8e8e0;border-bottom:0.5px solid #0f3028;}
.ins{background:#082018;border:0.5px solid #0f6e56;border-radius:8px;padding:8px 12px;margin-bottom:10px;}
.ins p{font-size:11px;color:#5dcaa5;margin:0;line-height:1.5;}
.pg{display:none;}
.pg.on{display:block;}
</style>
</head>
<body>
<div style="border:0.5px solid #0f6e56;border-radius:10px;overflow:hidden;">
<div class="hdr">
  <div><div class="hdr-title">University Hospital Southampton — Cancer Care Dashboard</div><div class="hdr-sub">Length of stay · Pre-noon performance · AOS admissions · Discharge lounge · Week ending 25 May 2025</div></div>
  <span class="badge">Healthcare Analytics</span>
</div>
<div class="tabs">
  <div class="tab on" onclick="nhsTab(1,this)">Length of Stay</div>
  <div class="tab" onclick="nhsTab(2,this)">Pre-Noon Performance</div>
  <div class="tab" onclick="nhsTab(3,this)">AOS Admissions</div>
  <div class="tab" onclick="nhsTab(4,this)">Discharge Lounge</div>
</div>
<div style="padding:0 12px 14px;">

<div id="n1" class="pg on">
  <div class="ins" style="margin-top:10px;"><p><strong style="color:#9fe1cb;">Length of stay overview:</strong> Average LoS this week 4.50 days vs target 4.33. Clinical Haematology driving variance with elective LoS of 10.44 days. Pre-noon discharge rate critically low at 8.26% against 25% target.</p></div>
  <div class="kpis">
    <div class="kpi t"><p class="lb">Total discharges</p><p class="vl">109</p><p class="sb">This week</p></div>
    <div class="kpi a"><p class="lb">Avg length of stay</p><p class="vl">4.50 days</p><p class="sb">Target: 4.33 days</p></div>
    <div class="kpi r"><p class="lb">13-week rolling LoS</p><p class="vl">5.83 days</p><p class="sb">Above baseline 5.67</p></div>
    <div class="kpi b"><p class="lb">Avg discharge time</p><p class="vl">16:31</p><p class="sb">Target: pre-noon</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1.6fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>Weekly average length of stay — trend</h4><p class="ax">X axis: week ending date &nbsp;|&nbsp; Y axis: average LoS (days)</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>Weekly avg LoS</span><span><b style="background:#378add;"></b>13-week rolling avg</span><span><b style="background:#888780;"></b>Baseline 5.67</span><span><b style="background:#e24b4a;"></b>Target 5.38</span></div>
      <div style="position:relative;height:220px;"><canvas id="nc1"></canvas></div>
    </div>
    <div class="card">
      <h4>LoS by specialty — this week vs target</h4><p class="ax">X axis: specialty &nbsp;|&nbsp; Y axis: average days</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>This week</span><span><b style="background:#378add;"></b>Baseline</span><span><b style="background:#e24b4a;"></b>Target</span></div>
      <div style="position:relative;height:220px;"><canvas id="nc2"></canvas></div>
    </div>
  </div>
  <div class="card">
    <h4>LoS breakdown — last week vs latest 13 weeks vs baseline vs target</h4>
    <p class="ax">By specialty and admission method — green = at/below target · amber = slightly above · red = significantly above</p>
    <table>
      <thead><tr><th>Specialty</th><th>Elective this wk</th><th>Elective baseline</th><th>Elective target</th><th>Non-elective this wk</th><th>Non-elective target</th><th>Total this wk</th><th>Total target</th></tr></thead>
      <tbody>
        <tr><td>Clin. Haematology</td><td><span class="bx" style="background:#2a0a0a;color:#e06060;">10.44</span></td><td style="color:#4a8a70;">19.23</td><td style="color:#4a8a70;">18.27</td><td><span class="bx" style="background:#0a2a1a;color:#5dcaa5;">4.32</span></td><td style="color:#4a8a70;">6.78</td><td><span class="bx" style="background:#0a2a1a;color:#5dcaa5;">6.28</span></td><td style="color:#4a8a70;">10.36</td></tr>
        <tr><td>Clinical Oncology</td><td><span class="bx" style="background:#0a2a1a;color:#5dcaa5;">2.43</span></td><td style="color:#4a8a70;">2.57</td><td style="color:#4a8a70;">2.44</td><td><span class="bx" style="background:#2a1a00;color:#e0a040;">4.81</span></td><td style="color:#4a8a70;">3.89</td><td><span class="bx" style="background:#2a1a00;color:#e0a040;">4.21</span></td><td style="color:#4a8a70;">3.55</td></tr>
        <tr><td>Medical Oncology</td><td><span class="bx" style="background:#0a2a1a;color:#5dcaa5;">1.39</span></td><td style="color:#4a8a70;">5.13</td><td style="color:#4a8a70;">4.88</td><td><span class="bx" style="background:#2a1a00;color:#e0a040;">4.39</span></td><td style="color:#4a8a70;">3.42</td><td><span class="bx" style="background:#2a1a00;color:#e0a040;">3.80</span></td><td style="color:#4a8a70;">3.67</td></tr>
        <tr style="background:#0f3028;"><td><strong>Total</strong></td><td><strong>4.48</strong></td><td style="color:#4a8a70;">9.47</td><td style="color:#4a8a70;">8.99</td><td><strong>4.50</strong></td><td style="color:#4a8a70;">4.33</td><td><strong>4.50</strong></td><td style="color:#4a8a70;">5.38</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div id="n2" class="pg">
  <div class="kpis">
    <div class="kpi r"><p class="lb">Total % pre-noon</p><p class="vl">8.26%</p><p class="sb">Target: 25%</p></div>
    <div class="kpi r"><p class="lb">Clin. Haematology</p><p class="vl">8.00%</p><p class="sb">Target: 25%</p></div>
    <div class="kpi r"><p class="lb">Clinical Oncology</p><p class="vl">6.06%</p><p class="sb">Target: 25%</p></div>
    <div class="kpi r"><p class="lb">Medical Oncology</p><p class="vl">9.80%</p><p class="sb">Target: 25%</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>Pre-noon discharge % by specialty — this week vs 13-week avg vs target</h4><p class="ax">X axis: specialty &nbsp;|&nbsp; Y axis: % discharged before noon &nbsp;|&nbsp; Target = 25%</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>This week %</span><span><b style="background:#378add;"></b>13-week avg %</span><span><b style="background:#e24b4a;"></b>25% target</span></div>
      <div style="position:relative;height:230px;"><canvas id="nc3"></canvas></div>
    </div>
    <div class="card">
      <h4>Over 7-day LoS pre-noon performance by specialty</h4><p class="ax">X axis: specialty &nbsp;|&nbsp; Y axis: % pre-noon &nbsp;|&nbsp; For stays longer than 7 days</p>
      <div class="lg"><span><b style="background:#534ab7;"></b>Elective non day case</span><span><b style="background:#1d9e75;"></b>Non-elective</span><span><b style="background:#e24b4a;"></b>25% target</span></div>
      <div style="position:relative;height:230px;"><canvas id="nc4"></canvas></div>
    </div>
  </div>
  <div class="card">
    <h4>Pre-noon performance detail — last week vs latest 13 weeks vs baseline vs target</h4>
    <p class="ax">By specialty and admission method — 25% target applies to all categories</p>
    <table>
      <thead><tr><th>Specialty</th><th>Elective this wk</th><th>Elective L13</th><th>Elective baseline</th><th>Elective target</th><th>Non-elec this wk</th><th>Non-elec L13</th><th>Non-elec target</th></tr></thead>
      <tbody>
        <tr><td>Clin. Haematology</td><td><span class="bx" style="background:#2a0a0a;color:#e06060;">12.50%</span></td><td style="color:#4a8a70;">13.25%</td><td style="color:#4a8a70;">11.32%</td><td style="color:#4a8a70;">25%</td><td><span class="bx" style="background:#2a0a0a;color:#e06060;">5.88%</span></td><td style="color:#4a8a70;">8.99%</td><td style="color:#4a8a70;">25%</td></tr>
        <tr><td>Clinical Oncology</td><td><span class="bx" style="background:#2a0a0a;color:#e06060;">11.11%</span></td><td style="color:#4a8a70;">16.96%</td><td style="color:#4a8a70;">20.28%</td><td style="color:#4a8a70;">25%</td><td><span class="bx" style="background:#2a0a0a;color:#e06060;">4.17%</span></td><td style="color:#4a8a70;">9.00%</td><td style="color:#4a8a70;">25%</td></tr>
        <tr><td>Medical Oncology</td><td><span class="bx" style="background:#2a1a00;color:#e0a040;">30.00%</span></td><td style="color:#4a8a70;">11.02%</td><td style="color:#4a8a70;">17.21%</td><td style="color:#4a8a70;">25%</td><td><span class="bx" style="background:#2a0a0a;color:#e06060;">4.88%</span></td><td style="color:#4a8a70;">9.48%</td><td style="color:#4a8a70;">25%</td></tr>
        <tr style="background:#0f3028;"><td><strong>Total</strong></td><td><strong>18.52%</strong></td><td style="color:#4a8a70;">13.65%</td><td style="color:#4a8a70;">15.98%</td><td style="color:#4a8a70;">25%</td><td><strong>4.88%</strong></td><td style="color:#4a8a70;">9.23%</td><td style="color:#4a8a70;">25%</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div id="n3" class="pg">
  <div class="kpis" style="grid-template-columns:repeat(3,minmax(0,1fr));">
    <div class="kpi a"><p class="lb">AOS admissions</p><p class="vl">94</p><p class="sb">This week (avg 115)</p></div>
    <div class="kpi t"><p class="lb">AOS discharges</p><p class="vl">48</p><p class="sb">This week (avg 66)</p></div>
    <div class="kpi b"><p class="lb">AOS ward transfers</p><p class="vl">45</p><p class="sb">This week (avg 50)</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>Weekly AOS admissions — trend with rolling 13-week average</h4><p class="ax">X axis: week ending date &nbsp;|&nbsp; Y axis: weekly AOS admissions</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>Weekly admissions</span><span><b style="background:#378add;"></b>Rolling R13 avg (~115)</span></div>
      <div style="position:relative;height:210px;"><canvas id="nc5"></canvas></div>
    </div>
    <div class="card">
      <h4>AOS admissions by specialty — this week vs 13-week average</h4><p class="ax">X axis: specialty &nbsp;|&nbsp; Y axis: number of admissions</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>This week</span><span><b style="background:#5dcaa5;"></b>13-week avg</span></div>
      <div style="position:relative;height:210px;"><canvas id="nc6"></canvas></div>
    </div>
  </div>
  <div class="card">
    <h4>Rolling 13-week AOS discharges and ward transfers</h4><p class="ax">X axis: week ending date &nbsp;|&nbsp; Y axis: rolling 13-week average &nbsp;|&nbsp; Jul 2023 – Jan 2025</p>
    <div class="lg"><span><b style="background:#1d9e75;"></b>AOS Discharges R13</span><span><b style="background:#534ab7;"></b>AOS Ward Transfers R13</span></div>
    <div style="position:relative;height:160px;"><canvas id="nc7"></canvas></div>
  </div>
</div>

<div id="n4" class="pg">
  <div class="kpis" style="grid-template-columns:repeat(3,minmax(0,1fr));">
    <div class="kpi t"><p class="lb">Discharged via lounge</p><p class="vl">37</p><p class="sb">This week total</p></div>
    <div class="kpi b"><p class="lb">% via lounge</p><p class="vl">100%</p><p class="sb">All eligible patients</p></div>
    <div class="kpi p"><p class="lb">Avg time to lounge</p><p class="vl">14:11</p><p class="sb">Target: pre-noon</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>Weekly discharge lounge usage — Oct 2023 to Apr 2025</h4><p class="ax">X axis: week ending date &nbsp;|&nbsp; Y axis: discharges via lounge</p>
      <div class="lg"><span><b style="background:#534ab7;"></b>Discharges via lounge</span><span><b style="background:#378add;"></b>Rolling 4-week avg</span></div>
      <div style="position:relative;height:200px;"><canvas id="nc8"></canvas></div>
    </div>
    <div class="card">
      <h4>Weekly avg time patients sent to lounge</h4><p class="ax">X axis: week ending date &nbsp;|&nbsp; Y axis: avg time (24hr) &nbsp;|&nbsp; Target = 12:00</p>
      <div class="lg"><span><b style="background:#534ab7;"></b>Avg time to lounge</span><span><b style="background:#e24b4a;"></b>Target: 12:00</span></div>
      <div style="position:relative;height:200px;"><canvas id="nc9"></canvas></div>
    </div>
  </div>
  <div class="card">
    <h4>Cancer patients discharged via discharge lounges — by ward and lounge</h4>
    <p class="ax">This week — breakdown by discharging ward and receiving lounge location</p>
    <table>
      <thead><tr><th>Discharging ward</th><th>Cardio &amp; Thoracic # Pts</th><th>Avg time</th><th>G Level MOP # Pts</th><th>Avg time</th><th>Surgical # Pts</th><th>Avg time</th><th>Total # Pts</th><th>Avg time</th></tr></thead>
      <tbody>
        <tr><td>Ward C4</td><td>1</td><td style="color:#4a8a70;">14:20</td><td>10</td><td style="color:#4a8a70;">12:51</td><td>1</td><td style="color:#4a8a70;">11:30</td><td><strong>12</strong></td><td style="color:#4a8a70;">12:52</td></tr>
        <tr><td>C2 Haematology</td><td>4</td><td style="color:#4a8a70;">16:48</td><td>5</td><td style="color:#4a8a70;">15:57</td><td>2</td><td style="color:#4a8a70;">14:34</td><td><strong>11</strong></td><td style="color:#4a8a70;">16:00</td></tr>
        <tr><td>Ward D12</td><td>2</td><td style="color:#4a8a70;">13:20</td><td>3</td><td style="color:#4a8a70;">15:20</td><td>—</td><td style="color:#4a8a70;">—</td><td><strong>5</strong></td><td style="color:#4a8a70;">14:32</td></tr>
        <tr style="background:#0f3028;"><td><strong>Total</strong></td><td><strong>8</strong></td><td><strong>15:30</strong></td><td><strong>21</strong></td><td><strong>14:12</strong></td><td><strong>8</strong></td><td><strong>12:48</strong></td><td><strong>37</strong></td><td><strong>14:11</strong></td></tr>
      </tbody>
    </table>
  </div>
</div>

</div>
</div>

<script>
const ni={};
const wks=['Jul 23','Aug 23','Sep 23','Oct 23','Nov 23','Dec 23','Jan 24','Feb 24','Mar 24','Apr 24','May 24','Jun 24','Jul 24','Aug 24','Sep 24','Oct 24','Nov 24','Dec 24','Jan 25'];
function nhsTab(n,el){
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  document.getElementById('n'+n).classList.add('on');
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  setTimeout(()=>ndraw(n),60);
}
const dt={color:'#5dcaa5',font:{size:9}};
const dg={color:'rgba(29,158,117,0.15)'};
const bO=(xl,yl,maxY)=>({responsive:true,maintainAspectRatio:false,layout:{padding:{top:18,right:8}},plugins:{legend:{display:false}},scales:{x:{title:{display:true,text:xl,font:{size:9},color:'#4a8a70'},ticks:{...dt,maxRotation:40,autoSkip:true,maxTicksLimit:9},grid:{display:false}},y:{title:{display:true,text:yl,font:{size:9},color:'#4a8a70'},max:maxY,ticks:dt,grid:dg}}});
function ndraw(n){
  if(ni[n])return;ni[n]=true;
  if(n===1){
    const los=[5.8,6.2,5.1,5.9,6.8,7.2,6.1,5.4,5.2,4.9,5.3,5.7,6.1,5.8,5.5,5.2,5.9,6.4,5.7];
    const rol=[5.9,5.9,5.8,5.9,6.0,6.1,6.1,6.0,5.8,5.7,5.6,5.6,5.7,5.7,5.6,5.5,5.6,5.7,5.7];
    new Chart('nc1',{type:'line',data:{labels:wks,datasets:[{data:los,borderColor:'#1d9e75',backgroundColor:'rgba(29,158,117,0.1)',fill:true,borderWidth:2,tension:0.3,pointRadius:3,pointBackgroundColor:'#1d9e75'},{data:rol,borderColor:'#378add',borderDash:[5,3],borderWidth:1.5,fill:false,tension:0.3,pointRadius:0},{data:Array(19).fill(5.67),borderColor:'#888780',borderDash:[2,2],borderWidth:1,fill:false,pointRadius:0},{data:Array(19).fill(5.38),borderColor:'#e24b4a',borderDash:[4,2],borderWidth:1.5,fill:false,pointRadius:0}]},options:bO('Week ending date','Average LoS (days)',9)});
    new Chart('nc2',{type:'bar',data:{labels:['Clin. Haematology','Clinical Oncology','Medical Oncology'],datasets:[{label:'This week',data:[6.28,4.21,3.80],backgroundColor:'#1d9e75',borderRadius:3},{label:'Baseline',data:[10.90,3.75,3.35],backgroundColor:'#378add',borderRadius:3},{label:'Target',data:[10.36,3.55,3.67],backgroundColor:'rgba(226,75,74,0.3)',borderRadius:3,borderColor:'#e24b4a',borderWidth:1.5}]},options:bO('Specialty','Average LoS (days)',14)});
  }
  if(n===2){
    new Chart('nc3',{type:'bar',data:{labels:['Clin. Haematology','Clinical Oncology','Medical Oncology','Total'],datasets:[{label:'This week %',data:[8.0,6.06,9.80,8.26],backgroundColor:'#1d9e75',borderRadius:3},{label:'13-wk avg %',data:[10.49,10.78,11.02,10.24],backgroundColor:'#378add',borderRadius:3},{label:'Target 25%',data:[25,25,25,25],backgroundColor:'rgba(226,75,74,0.15)',borderRadius:3,borderColor:'#e24b4a',borderWidth:1.5}]},options:bO('Specialty','% discharged before noon',32)});
    new Chart('nc4',{type:'bar',data:{labels:['Clin. Haematology','Clinical Oncology','Medical Oncology','Total'],datasets:[{label:'Elective',data:[12.50,11.11,30.00,18.52],backgroundColor:'#534ab7',borderRadius:3},{label:'Non-elective',data:[5.88,4.17,4.88,4.88],backgroundColor:'#1d9e75',borderRadius:3},{label:'Target',data:[25,25,25,25],backgroundColor:'rgba(226,75,74,0.1)',borderRadius:3,borderColor:'#e24b4a',borderWidth:1.5}]},options:bO('Specialty','% pre-noon (7+ day LoS)',35)});
  }
  if(n===3){
    const aos=[105,98,112,120,108,95,118,125,110,102,115,130,118,109,122,108,100,112,94];
    const aosR=[107,105,105,108,110,109,110,112,113,111,111,112,113,114,115,115,114,113,112];
    new Chart('nc5',{type:'line',data:{labels:wks,datasets:[{data:aos,borderColor:'#1d9e75',backgroundColor:'rgba(29,158,117,0.1)',fill:true,borderWidth:2,tension:0.3,pointRadius:3,pointBackgroundColor:'#1d9e75'},{data:aosR,borderColor:'#378add',borderDash:[5,3],borderWidth:1.5,fill:false,tension:0.3,pointRadius:0}]},options:bO('Week ending date','Weekly AOS admissions',150)});
    new Chart('nc6',{type:'bar',data:{labels:['Medical Oncology','Clinical Oncology','Clin. Haematology'],datasets:[{label:'This week',data:[48,30,16],backgroundColor:['#1d9e75','#378add','#534ab7'],borderRadius:3},{label:'13-wk avg',data:[55,37,23],backgroundColor:['rgba(29,158,117,0.3)','rgba(55,138,221,0.3)','rgba(83,74,183,0.3)'],borderRadius:3}]},options:bO('Specialty','AOS admissions',70)});
    const dis=[42,44,46,50,52,54,56,58,60,62,64,66,68,70,68,66,65,67,68];
    const wt=[40,42,43,45,46,48,49,50,50,51,51,51,52,52,52,50,49,50,50];
    new Chart('nc7',{type:'line',data:{labels:wks,datasets:[{data:dis,borderColor:'#1d9e75',backgroundColor:'rgba(29,158,117,0.08)',fill:true,borderWidth:2,tension:0.4,pointRadius:2,pointBackgroundColor:'#1d9e75'},{data:wt,borderColor:'#534ab7',borderDash:[5,3],backgroundColor:'rgba(83,74,183,0.05)',fill:true,borderWidth:2,tension:0.4,pointRadius:2,pointBackgroundColor:'#534ab7'}]},options:bO('Week ending date','Rolling 13-week avg (count)',85)});
  }
  if(n===4){
    const lw=['Oct 23','Nov 23','Dec 23','Jan 24','Feb 24','Mar 24','Apr 24','May 24','Jun 24','Jul 24','Aug 24','Sep 24','Oct 24','Nov 24','Dec 24','Jan 25','Feb 25','Mar 25','Apr 25'];
    const lu=[0,0,1,1,0,0,1,1,2,5,3,2,1,1,2,1,2,2,3];
    const la=[0,0,0.3,0.5,0.4,0.3,0.4,0.7,1.0,1.7,2.0,1.7,1.3,1.0,1.3,1.3,1.3,1.7,2.0];
    new Chart('nc8',{type:'line',data:{labels:lw,datasets:[{data:lu,borderColor:'#534ab7',backgroundColor:'rgba(83,74,183,0.1)',fill:true,borderWidth:2,tension:0.3,pointRadius:3,pointBackgroundColor:'#534ab7'},{data:la,borderColor:'#378add',borderDash:[5,3],borderWidth:1.5,fill:false,tension:0.3,pointRadius:0}]},options:bO('Week ending date','Discharges via lounge',7)});
    const lt=[14,13.5,15,16,14.5,13,14,15,17,16,15,14,13.5,14,15,14,13.5,14.5,14];
    new Chart('nc9',{type:'line',data:{labels:lw,datasets:[{data:lt,borderColor:'#534ab7',backgroundColor:'rgba(83,74,183,0.08)',fill:true,borderWidth:2,tension:0.3,pointRadius:3,pointBackgroundColor:'#534ab7'},{data:Array(lw.length).fill(12),borderColor:'#e24b4a',borderDash:[5,3],borderWidth:1.5,fill:false,pointRadius:0}]},options:bO('Week ending date','Avg time to lounge (24hr)',20)});
  }
}
ndraw(1);
</script>
</body>
</html>`

export default function NHSDashboard() {
  return (
    <iframe
      srcDoc={html}
      style={{ width: '100%', minHeight: '600px', border: 'none' }}
      title="NHS Cancer Care Dashboard"
    />
  )
}
