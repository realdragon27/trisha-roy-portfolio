const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Segoe UI',sans-serif;background:#1a2a1a;color:#e0ead0;padding:12px;}
.hdr{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#2a4a1a;border-radius:8px 8px 0 0;margin-bottom:0;}
.hdr-title{font-size:14px;font-weight:600;color:#c8e6a0;}
.hdr-sub{font-size:10px;color:#8ab060;margin-top:2px;}
.badge{display:inline-block;font-size:10px;padding:2px 8px;border-radius:4px;font-weight:500;background:#3a6a1a;color:#c8e6a0;margin-right:4px;}
.tabs{display:flex;gap:4px;background:#1e3a10;padding:6px 14px;flex-wrap:wrap;}
.tab{font-size:11px;padding:5px 10px;border-radius:6px;cursor:pointer;color:#8ab060;border:0.5px solid #3a6a1a;white-space:nowrap;}
.tab.on{background:#639922;color:#e8f5d0;font-weight:600;border-color:#639922;}
.kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:10px 0;}
.kpi{border-radius:8px;padding:10px 12px;}
.kpi.g{background:#1e3a10;border-left:3px solid #639922;}
.kpi.a{background:#3a2a0a;border-left:3px solid #ba7517;}
.kpi.r{background:#3a1010;border-left:3px solid #a32d2d;}
.kpi.b{background:#0a1e3a;border-left:3px solid #378add;}
.kpi p.lb{font-size:10px;margin:0 0 2px;color:#8ab060;}
.kpi.a p.lb{color:#c89040;}
.kpi.r p.lb{color:#c85050;}
.kpi.b p.lb{color:#6090c0;}
.kpi p.vl{font-size:20px;font-weight:600;margin:0 0 1px;}
.kpi.g p.vl{color:#a0d060;}
.kpi.a p.vl{color:#e0a040;}
.kpi.r p.vl{color:#e06060;}
.kpi.b p.vl{color:#60a0e0;}
.kpi p.sb{font-size:10px;color:#6a8a50;margin:0;}
.card{background:#1e3010;border:0.5px solid #3a6a1a;border-radius:10px;padding:12px;}
.card h4{font-size:12px;font-weight:600;color:#c8e6a0;margin:0 0 2px;}
.card p.ax{font-size:10px;color:#6a8a50;margin:0 0 6px;}
.lg{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:6px;}
.lg span{font-size:10px;color:#8ab060;display:flex;align-items:center;gap:3px;}
.lg span b{width:10px;height:10px;border-radius:2px;display:inline-block;}
.bx{display:inline-block;font-size:9px;padding:2px 6px;border-radius:4px;font-weight:500;}
table{width:100%;border-collapse:collapse;font-size:11px;table-layout:fixed;}
thead tr{background:#2a4a1a;}
th{padding:5px 6px;text-align:left;color:#a0c870;font-weight:500;}
td{padding:4px 6px;color:#c0d8a0;border-bottom:0.5px solid #2a4a1a;}
.ins{background:#1a2e0a;border:0.5px solid #3a6a1a;border-radius:8px;padding:8px 12px;margin-bottom:10px;}
.ins p{font-size:11px;color:#8ab060;margin:0;line-height:1.5;}
.pg{display:none;}
.pg.on{display:block;}
</style>
</head>
<body>
<div style="border:0.5px solid #3a6a1a;border-radius:10px;overflow:hidden;">
<div class="hdr">
  <div><div class="hdr-title">Verra Mobility UK — Operations Dashboard</div><div class="hdr-sub">SLA tracking · Calibration management · Ticket operations · 5/8/2024–5/7/2026</div></div>
  <span class="badge">Operational Analytics</span>
</div>
<div class="tabs">
  <div class="tab on" onclick="vmTab(1,this)">All Tickets (Ops)</div>
  <div class="tab" onclick="vmTab(2,this)">All Open Tickets</div>
  <div class="tab" onclick="vmTab(3,this)">SLA Overview</div>
  <div class="tab" onclick="vmTab(4,this)">Calibration Overview</div>
</div>
<div style="padding:0 12px 14px;">

<div id="vm1" class="pg on">
  <div class="kpis">
    <div class="kpi g"><p class="lb">Total tickets</p><p class="vl">82</p><p class="sb">All time period</p></div>
    <div class="kpi a"><p class="lb">Avg days open</p><p class="vl">110</p><p class="sb">Days average</p></div>
    <div class="kpi r"><p class="lb">Oldest ticket</p><p class="vl">442</p><p class="sb">Days open</p></div>
    <div class="kpi b"><p class="lb">% Third party</p><p class="vl">84.1%</p><p class="sb">69 tickets</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1.1fr;gap:12px;">
    <div class="card">
      <h4>Tickets by action category</h4><p class="ax">X axis: action category &nbsp;|&nbsp; Y axis: number of tickets</p>
      <div class="lg"><span><b style="background:#639922;"></b>TM Only — 33</span><span><b style="background:#378add;"></b>NH RECs — 26</span><span><b style="background:#a32d2d;"></b>Veramobility — 13</span><span><b style="background:#888780;"></b>Other — 10</span></div>
      <div style="position:relative;height:200px;"><canvas id="v1c1"></canvas></div>
    </div>
    <div class="card">
      <h4>All tickets — case detail</h4><p class="ax">Live ticket register with status classification</p>
      <table>
        <thead><tr><th>Case ID</th><th>REC Region</th><th>Site</th><th>Category</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>CAS-2791</td><td>East Midlands</td><td>Thames Valley M1</td><td><span class="bx" style="background:#3a2a0a;color:#e0a040;">Maintenance</span></td><td><span class="bx" style="background:#3a1010;color:#e06060;">Open</span></td></tr>
          <tr><td>CAS-3882</td><td>North East</td><td>S Yorkshire M1</td><td><span class="bx" style="background:#3a2a0a;color:#e0a040;">Maintenance</span></td><td><span class="bx" style="background:#3a1010;color:#e06060;">Open</span></td></tr>
          <tr><td>CAS-4265</td><td>North East</td><td>W Yorkshire M62</td><td><span class="bx" style="background:#3a2a0a;color:#e0a040;">Maintenance</span></td><td><span class="bx" style="background:#3a1010;color:#e06060;">Open</span></td></tr>
          <tr><td>CAS-4000</td><td>North West</td><td>Gtr Manchester M6</td><td><span class="bx" style="background:#1e3a10;color:#a0d060;">Routine</span></td><td><span class="bx" style="background:#3a1010;color:#e06060;">Open</span></td></tr>
          <tr><td>CAS-4235</td><td>North West</td><td>Gtr Manchester M6</td><td><span class="bx" style="background:#3a2a0a;color:#e0a040;">Maintenance</span></td><td><span class="bx" style="background:#3a1010;color:#e06060;">Open</span></td></tr>
          <tr><td>CAS-4192</td><td>South East</td><td>Essex S568A M2S</td><td><span class="bx" style="background:#0a1e3a;color:#60a0e0;">Alarm</span></td><td><span class="bx" style="background:#1e3a10;color:#a0d060;">Closed</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div id="vm2" class="pg">
  <div class="kpis">
    <div class="kpi g"><p class="lb">Open tickets</p><p class="vl">45</p><p class="sb">Currently open</p></div>
    <div class="kpi a"><p class="lb">Avg days open</p><p class="vl">95</p><p class="sb">Days average</p></div>
    <div class="kpi r"><p class="lb">Oldest ticket</p><p class="vl">344</p><p class="sb">Days open</p></div>
    <div class="kpi b"><p class="lb">% Third party</p><p class="vl">97.8%</p><p class="sb">44 tickets</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>Tickets by REC region</h4><p class="ax">X axis: REC region &nbsp;|&nbsp; Y axis: number of tickets</p>
      <div class="lg"><span><b style="background:#2d6a4f;"></b>South East 21</span><span><b style="background:#639922;"></b>North West 9</span><span><b style="background:#97c459;"></b>W Midlands 9</span><span><b style="background:#378add;"></b>East 3</span></div>
      <div style="position:relative;height:180px;"><canvas id="v2c1"></canvas></div>
    </div>
    <div class="card">
      <h4>Tickets by year-month</h4><p class="ax">X axis: month &nbsp;|&nbsp; Y axis: ticket count</p>
      <div class="lg"><span><b style="background:#639922;"></b>Monthly volume</span><span><b style="background:#378add;border-top:2px dashed #378add;"></b>Rolling avg</span></div>
      <div style="position:relative;height:180px;"><canvas id="v2c2"></canvas></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:12px;">
    <div class="card">
      <h4>Avg days open by REC region</h4><p class="ax">X axis: average days open &nbsp;|&nbsp; Y axis: REC region</p>
      <div class="lg"><span><b style="background:#a32d2d;"></b>Critical (&gt;200)</span><span><b style="background:#ba7517;"></b>Elevated (100–200)</span><span><b style="background:#639922;"></b>Normal (&lt;100)</span></div>
      <div style="position:relative;height:220px;"><canvas id="v2c3"></canvas></div>
    </div>
    <div class="card">
      <h4>Ticket category split</h4><p class="ax">Breakdown by responsible action party</p>
      <div class="lg"><span><b style="background:#2d6a4f;"></b>TM Only 62%</span><span><b style="background:#378add;"></b>Other 22%</span><span><b style="background:#97c459;"></b>NH RECs 12%</span><span><b style="background:#888780;"></b>VM 4%</span></div>
      <div style="position:relative;height:180px;"><canvas id="v2c4"></canvas></div>
    </div>
  </div>
</div>

<div id="vm3" class="pg">
  <div class="kpis" style="grid-template-columns:repeat(3,minmax(0,1fr));">
    <div class="kpi a"><p class="lb">Open tickets</p><p class="vl">49</p><p class="sb">Active cases</p></div>
    <div class="kpi r"><p class="lb">SLA breached</p><p class="vl">5</p><p class="sb">Requires escalation</p></div>
    <div class="kpi a"><p class="lb">About to breach</p><p class="vl">42</p><p class="sb">Within 168hr window</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>SLA achieved vs breached by priority</h4><p class="ax">X axis: priority &nbsp;|&nbsp; Y axis: tickets</p>
      <div class="lg"><span><b style="background:#639922;"></b>SLA Achieved</span><span><b style="background:#a32d2d;"></b>SLA Breached</span></div>
      <div style="position:relative;height:200px;"><canvas id="v3c1"></canvas></div>
    </div>
    <div class="card">
      <h4>Open tickets breached vs achieved by priority</h4><p class="ax">X axis: ticket count &nbsp;|&nbsp; Y axis: priority</p>
      <div class="lg"><span><b style="background:#a32d2d;"></b>Breached</span><span><b style="background:#639922;"></b>Within SLA</span></div>
      <div style="position:relative;height:200px;"><canvas id="v3c2"></canvas></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:12px;">
    <div class="card">
      <h4>SLA performance trend — tickets closed by month</h4><p class="ax">X axis: month &nbsp;|&nbsp; Y axis: tickets closed</p>
      <div class="lg"><span><b style="background:#639922;"></b>SLA Achieved</span><span><b style="background:#888780;border-top:2px dashed #888780;"></b>SLA Breached</span></div>
      <div style="position:relative;height:180px;"><canvas id="v3c3"></canvas></div>
    </div>
    <div class="card">
      <h4>Tickets closed last month by priority</h4><p class="ax">P3 55% · P2 42% · P1 3%</p>
      <div class="lg"><span><b style="background:#97c459;"></b>P2 42%</span><span><b style="background:#2d6a4f;"></b>P3 55%</span><span><b style="background:#888780;"></b>P1 3%</span></div>
      <div style="position:relative;height:180px;"><canvas id="v3c4"></canvas></div>
    </div>
  </div>
</div>

<div id="vm4" class="pg">
  <div class="kpis" style="grid-template-columns:repeat(5,minmax(0,1fr));">
    <div class="kpi g"><p class="lb">Sites calibrated LM</p><p class="vl">16</p><p class="sb">Last month</p></div>
    <div class="kpi r"><p class="lb">Overdue calibrations</p><p class="vl">22</p><p class="sb">Past expiry</p></div>
    <div class="kpi a"><p class="lb">Due soon</p><p class="vl">21</p><p class="sb">Within 30 days</p></div>
    <div class="kpi g"><p class="lb">Total sites calibrated</p><p class="vl">174</p><p class="sb">All time</p></div>
    <div class="kpi b"><p class="lb">Missing cal. date</p><p class="vl">3</p><p class="sb">Data incomplete</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>Site calibration register</h4><p class="ax">Status: OK = within date · Due Soon = within 30 days · Overdue = past expiry</p>
      <table>
        <thead><tr><th>Location</th><th>Calibration date</th><th>Expiry date</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Avon &amp; Somerset 3840B M4</td><td>02 Apr 2026</td><td>02 Apr 2027</td><td><span class="bx" style="background:#1e3a10;color:#a0d060;">OK</span></td></tr>
          <tr><td>Bedfordshire 2523B M1</td><td>10 Oct 2025</td><td>10 Oct 2026</td><td><span class="bx" style="background:#1e3a10;color:#a0d060;">OK</span></td></tr>
          <tr><td>Cambridgeshire 0829B A14</td><td>05 Nov 2024</td><td>05 Nov 2025</td><td><span class="bx" style="background:#3a1010;color:#e06060;">Overdue</span></td></tr>
          <tr><td>Cheshire 1275A M62</td><td>19 Sep 2025</td><td>19 Sep 2026</td><td><span class="bx" style="background:#3a2a0a;color:#e0a040;">Due Soon</span></td></tr>
          <tr><td>Derbyshire 3898A M1</td><td>28 Aug 2025</td><td>28 Aug 2026</td><td><span class="bx" style="background:#1e3a10;color:#a0d060;">OK</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="card">
      <h4>Locations by calibration status</h4><p class="ax">Overall calibration health — all sites</p>
      <div class="lg"><span><b style="background:#639922;"></b>OK 76%</span><span><b style="background:#ba7517;"></b>Due Soon 12%</span><span><b style="background:#a32d2d;"></b>Overdue 11%</span></div>
      <div style="position:relative;height:180px;"><canvas id="v4c1"></canvas></div>
    </div>
  </div>
  <div class="card">
    <h4>Sites calibrated by year-quarter</h4><p class="ax">X axis: year-quarter &nbsp;|&nbsp; Y axis: number of sites calibrated &nbsp;|&nbsp; Blue line = rolling 3-quarter avg</p>
    <div class="lg"><span><b style="background:#639922;"></b>Sites calibrated</span><span><b style="background:#378add;border-top:2px dashed #378add;"></b>Rolling avg</span></div>
    <div style="position:relative;height:140px;"><canvas id="v4c2"></canvas></div>
  </div>
</div>

</div>
</div>

<script>
const ci={};
function vmTab(n,el){
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  document.getElementById('vm'+n).classList.add('on');
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  setTimeout(()=>draw(n),60);
}
const darkTick={color:'#8ab060',font:{size:9}};
const darkGrid={color:'rgba(100,150,60,0.15)'};
const bO=(xl,yl,maxY)=>({responsive:true,maintainAspectRatio:false,layout:{padding:{top:18,right:8}},plugins:{legend:{display:false}},scales:{x:{title:{display:true,text:xl,font:{size:9},color:'#6a8a50'},ticks:darkTick,grid:{display:false}},y:{title:{display:true,text:yl,font:{size:9},color:'#6a8a50'},max:maxY,ticks:darkTick,grid:darkGrid}}});
const hO=(xl,yl)=>({responsive:true,maintainAspectRatio:false,indexAxis:'y',layout:{padding:{right:40,top:4}},plugins:{legend:{display:false}},scales:{x:{title:{display:true,text:xl,font:{size:9},color:'#6a8a50'},ticks:darkTick,grid:darkGrid},y:{ticks:darkTick,grid:{display:false}}}});
function draw(n){
  if(ci[n])return;ci[n]=true;
  if(n===1){new Chart('v1c1',{type:'bar',data:{labels:['TM Only','NH RECs','Veramobility','Other'],datasets:[{data:[33,26,13,10],backgroundColor:['#2d6a4f','#639922','#378add','#888780'],borderRadius:3}]},options:{...bO('Action category','Number of tickets',40)}});}
  if(n===2){
    new Chart('v2c1',{type:'bar',data:{labels:['South East','North West','W Midlands','East','South West','North East'],datasets:[{data:[21,9,9,3,2,1],backgroundColor:['#2d6a4f','#639922','#97c459','#378add','#534ab7','#888780'],borderRadius:3}]},options:{...bO('REC Region','Number of tickets',25)}});
    const mo=['May 25','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan 26','Feb','Mar','Apr','May'];
    new Chart('v2c2',{type:'line',data:{labels:mo,datasets:[{data:[3,4,5,4,6,5,4,5,6,7,8,18,10],borderColor:'#639922',backgroundColor:'rgba(99,153,34,0.1)',fill:true,borderWidth:2,tension:0.3,pointRadius:3,pointBackgroundColor:'#639922'},{data:[3.5,4,4.3,4.5,5,5,4.7,4.7,5.3,6.3,7,11,12],borderColor:'#378add',borderDash:[5,3],borderWidth:1.5,fill:false,tension:0.3,pointRadius:0}]},options:{...bO('Month','Ticket count',22)}});
    new Chart('v2c3',{type:'bar',indexAxis:'y',data:{labels:['East','South East','North East','W Midlands','North West','South West'],datasets:[{data:[324,182,83,65,53,49],backgroundColor:['#a32d2d','#d85a30','#639922','#639922','#639922','#639922'],borderRadius:3}]},options:{...hO('Average days open','REC Region')}});
    new Chart('v2c4',{type:'doughnut',data:{labels:['TM Only','Other','NH RECs','VM'],datasets:[{data:[62,22,12,4],backgroundColor:['#2d6a4f','#378add','#97c459','#888780'],borderWidth:2,borderColor:'#1e3010'}]},options:{responsive:true,maintainAspectRatio:false,cutout:'60%',plugins:{legend:{display:false}}}});
  }
  if(n===3){
    new Chart('v3c1',{type:'bar',data:{labels:['P2','P3','P1'],datasets:[{label:'Achieved',data:[21,16,1],backgroundColor:'#639922',borderRadius:3},{label:'Breached',data:[3,2,0],backgroundColor:'#a32d2d',borderRadius:3}]},options:{...bO('Priority','Number of tickets',25)}});
    new Chart('v3c2',{type:'bar',indexAxis:'y',data:{labels:['P2','P3'],datasets:[{label:'Breached',data:[4,1],backgroundColor:'#a32d2d',borderRadius:3},{label:'Achieved',data:[30,14],backgroundColor:'#639922',borderRadius:3}]},options:{...hO('Ticket count','Priority')}});
    const mo2=['Jan 25','Mar','May','Jul','Sep','Nov','Jan 26','Mar'];
    new Chart('v3c3',{type:'line',data:{labels:mo2,datasets:[{data:[28,35,38,36,30,28,30,40],borderColor:'#639922',backgroundColor:'rgba(99,153,34,0.12)',fill:true,borderWidth:2,tension:0.4,pointRadius:2,pointBackgroundColor:'#639922'},{data:[5,3,4,4,6,6,5,3],borderColor:'#888780',backgroundColor:'rgba(136,135,128,0.1)',fill:true,borderWidth:1.5,borderDash:[4,3],tension:0.4,pointRadius:2,pointBackgroundColor:'#888780'}]},options:{...bO('Month','Tickets closed',50)}});
    new Chart('v3c4',{type:'doughnut',data:{labels:['P3 55%','P2 42%','P1 3%'],datasets:[{data:[21,16,1],backgroundColor:['#2d6a4f','#97c459','#888780'],borderWidth:2,borderColor:'#1e3010'}]},options:{responsive:true,maintainAspectRatio:false,cutout:'60%',plugins:{legend:{display:false}}}});
  }
  if(n===4){
    new Chart('v4c1',{type:'doughnut',data:{labels:['OK 76%','Due Soon 12%','Overdue 11%'],datasets:[{data:[133,21,20],backgroundColor:['#639922','#ba7517','#a32d2d'],borderWidth:2,borderColor:'#1e3010'}]},options:{responsive:true,maintainAspectRatio:false,cutout:'58%',plugins:{legend:{display:false}}}});
    const calM=['2022-Q3','2022-Q4','2023-Q1','2023-Q2','2023-Q3','2023-Q4','2024-Q1','2024-Q2','2024-Q3','2024-Q4','2025-Q1','2025-Q2'];
    new Chart('v4c2',{type:'bar',data:{labels:calM,datasets:[{type:'bar',data:[1,1,3,5,8,10,12,19,16,12,8,12],backgroundColor:'#639922',borderRadius:3},{type:'line',data:[1,1,1.7,3,5.3,7.7,10,13.7,15.7,15.7,12,10.7],borderColor:'#378add',borderDash:[5,3],borderWidth:1.5,fill:false,tension:0.35,pointRadius:2,pointBackgroundColor:'#378add'}]},options:{...bO('Year-Quarter','Sites calibrated',22)}});
  }
}
draw(1);
</script>
</body>
</html>`

export default function VerraMobilityDashboard() {
  return (
    <iframe
      srcDoc={html}
      style={{ width: '100%', minHeight: '600px', border: 'none' }}
      title="Verra Mobility Operations Dashboard"
    />
  )
}
