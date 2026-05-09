const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Segoe UI',sans-serif;background:#f4f6f8;color:#1a2a3a;padding:12px;}
.hdr{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#102840;border-radius:8px 8px 0 0;}
.hdr-title{font-size:14px;font-weight:600;color:#e0ecf8;}
.hdr-sub{font-size:10px;color:#7090b0;margin-top:2px;}
.badge{display:inline-block;font-size:10px;padding:2px 8px;border-radius:4px;font-weight:500;background:#1a4060;color:#a0c8e8;margin-right:4px;}
.kpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:10px 0;}
.kpi.g{background:#e8f8f0;border-left:3px solid #1d9e75;border-radius:8px;padding:10px 12px;}
.kpi.b{background:#e8f0fc;border-left:3px solid #378add;border-radius:8px;padding:10px 12px;}
.kpi.p{background:#f0eeff;border-left:3px solid #534ab7;border-radius:8px;padding:10px 12px;}
.kpi p.lb{font-size:10px;font-weight:600;margin:0 0 2px;}
.kpi.g p.lb{color:#0a5a30;}.kpi.b p.lb{color:#0a3a7a;}.kpi.p p.lb{color:#3a2a7a;}
.kpi p.vl{font-size:22px;font-weight:700;margin:0 0 2px;}
.kpi.g p.vl{color:#0f6e56;}.kpi.b p.vl{color:#185fa5;}.kpi.p p.vl{color:#3c3489;}
.kpi p.sb{font-size:11px;font-weight:400;margin:0;}
.kpi.g p.sb{color:#2a7a50;}.kpi.b p.sb{color:#2a5a8a;}.kpi.p p.sb{color:#5a4a8a;}
.card{background:#ffffff;border:0.5px solid #d0d8e8;border-radius:10px;padding:14px;box-shadow:0 1px 4px rgba(0,0,0,0.05);}
.card h4{font-size:13px;font-weight:700;color:#1a2a3a;margin:0 0 4px;}
.card p.ax{font-size:11px;color:#4a5a6a;margin:0 0 8px;line-height:1.4;}
.ins{background:#e4eeff;border:0.5px solid #90a8d0;border-radius:8px;padding:10px 14px;margin-bottom:12px;}
.ins p{font-size:11px;color:#1a2a4a;margin:0;line-height:1.6;}
.sc-kpi{border-radius:8px;padding:10px 12px;}
.sc-kpi.g{background:#e8f8f0;border-left:3px solid #1d9e75;}
.sc-kpi.a{background:#fff4e0;border-left:3px solid #ba7517;}
.sc-kpi.r{background:#ffeaea;border-left:3px solid #a32d2d;}
.sc-kpi p.lb{font-size:10px;font-weight:600;margin:0 0 2px;}
.sc-kpi.g p.lb{color:#0a5a30;}.sc-kpi.a p.lb{color:#5a3000;}.sc-kpi.r p.lb{color:#5a0a0a;}
.sc-kpi p.vl{font-size:18px;font-weight:700;margin:0 0 2px;}
.sc-kpi.g p.vl{color:#0f6e56;}.sc-kpi.a p.vl{color:#854f0b;}.sc-kpi.r p.vl{color:#791f1f;}
.sc-kpi p.tgt{font-size:11px;font-weight:500;margin:0;}
.sc-kpi.g p.tgt{color:#1d9e75;}.sc-kpi.a p.tgt{color:#ba7517;}.sc-kpi.r p.tgt{color:#a32d2d;}
.bx{display:inline-block;font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;}
table{width:100%;border-collapse:collapse;font-size:11px;table-layout:fixed;}
thead tr{background:#e8f0f8;}
th{padding:5px 6px;text-align:left;color:#2a4a6a;font-weight:600;}
td{padding:5px 6px;color:#2a3a4a;border-bottom:0.5px solid #e8eef4;}
</style>
</head>
<body>
<div style="border:0.5px solid #d0d8e8;border-radius:10px;overflow:hidden;">
<div class="hdr">
  <div><div class="hdr-title">KPI Scorecard & Process Optimisation — HPE Business Services</div><div class="hdr-sub">Power BI · SQL · Python · JIRA · Salesforce bottleneck analysis · £20K annual savings identified</div></div>
  <span class="badge">Business Intelligence</span>
</div>
<div style="padding:12px;">
<div class="ins"><p><strong style="color:#0a1a3a;">Project summary:</strong> Designed Power BI KPI scorecards monitoring process cycle times and backlog volumes across HPE business service operations. Identified Salesforce configuration bottlenecks contributing £20K in annual losses through data-driven root cause analysis. Delivered 30% efficiency gain and 15% reduction in scope creep through process redesign and ongoing monitoring dashboards.</p></div>
<div class="kpis">
  <div class="kpi g"><p class="lb">Annual savings identified</p><p class="vl">£20K</p><p class="sb">Via Salesforce bottleneck analysis</p></div>
  <div class="kpi b"><p class="lb">Efficiency gain achieved</p><p class="vl">30%</p><p class="sb">Post process redesign</p></div>
  <div class="kpi p"><p class="lb">Scope creep reduction</p><p class="vl">15%</p><p class="sb">Via backlog monitoring dashboard</p></div>
</div>

<div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-bottom:12px;">
  <div class="sc-kpi g"><p class="lb">Avg cycle time</p><p class="vl">3.2 days</p><p class="tgt">✓ Target: 4 days — on track</p></div>
  <div class="sc-kpi a"><p class="lb">Backlog volume</p><p class="vl">142 items</p><p class="tgt">⚠ Target: 120 — monitor</p></div>
  <div class="sc-kpi g"><p class="lb">SLA compliance rate</p><p class="vl">94.7%</p><p class="tgt">✓ Target: 90% — on track</p></div>
  <div class="sc-kpi r"><p class="lb">Process defect rate</p><p class="vl">8.3%</p><p class="tgt">✗ Target: 5% — action needed</p></div>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
  <div class="card">
    <h4>Process cycle time trend — weekly (12 weeks)</h4>
    <p class="ax">X axis: week number · Y axis: average days · Red dashed = 4-day target · Showing improvement trajectory from 6.2 to 3.2 days</p>
    <div style="position:relative;height:190px;"><canvas id="k1"></canvas></div>
  </div>
  <div class="card">
    <h4>Backlog volume by category</h4>
    <p class="ax">X axis: issue category · Y axis: open items · Red bar = above threshold · Salesforce config is the primary driver</p>
    <div style="position:relative;height:190px;"><canvas id="k2"></canvas></div>
  </div>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
  <div class="card">
    <h4>Before vs after optimisation — key metrics</h4>
    <p class="ax">Red = before intervention · Green = after process redesign · All four metrics improved significantly</p>
    <div style="position:relative;height:190px;"><canvas id="k3"></canvas></div>
  </div>
  <div class="card">
    <h4>Scope creep trend — unplanned change requests per week</h4>
    <p class="ax">Purple = pre-optimisation · Green = post-optimisation · Amber dashed = 15-request target · 15% sustained reduction achieved</p>
    <div style="position:relative;height:190px;"><canvas id="k4"></canvas></div>
  </div>
</div>

<div class="card">
  <h4>Bottleneck analysis — Salesforce configuration delays (root cause of £20K annual impact)</h4>
  <p class="ax">Process stage breakdown · Avg delay hours · Weekly volume · RAG status · Estimated annual cost · Recommended action</p>
  <table>
    <thead><tr><th>Process stage</th><th>Avg delay (hrs)</th><th>Volume/wk</th><th>RAG</th><th>Est. annual cost</th><th>Recommended action</th></tr></thead>
    <tbody>
      <tr><td style="font-weight:500;">Salesforce config validation</td><td>14.2</td><td>58</td><td><span class="bx" style="background:#ffeaea;color:#791f1f;">Red</span></td><td style="font-weight:700;color:#791f1f;">£11,200</td><td style="color:#4a5a6a;">Automate validation checks</td></tr>
      <tr><td style="font-weight:500;">API integration errors</td><td>6.8</td><td>32</td><td><span class="bx" style="background:#fff4e0;color:#854f0b;">Amber</span></td><td style="font-weight:700;color:#854f0b;">£5,400</td><td style="color:#4a5a6a;">Improve error handling</td></tr>
      <tr><td style="font-weight:500;">Process query resolution</td><td>3.1</td><td>28</td><td><span class="bx" style="background:#e8f8f0;color:#0f6e56;">Green</span></td><td style="color:#0f6e56;">£2,100</td><td style="color:#4a5a6a;">Monitor — within SLA</td></tr>
      <tr><td style="font-weight:500;">Manual data reconciliation</td><td>5.4</td><td>22</td><td><span class="bx" style="background:#fff4e0;color:#854f0b;">Amber</span></td><td style="font-weight:700;color:#854f0b;">£1,800</td><td style="color:#4a5a6a;">Partial automation candidate</td></tr>
      <tr style="background:#e8f4ff;"><td style="font-weight:700;">Total identified</td><td style="font-weight:700;">—</td><td style="font-weight:700;">140</td><td>—</td><td style="font-weight:700;color:#0f6e56;">£20,500</td><td style="color:#0f6e56;font-weight:500;">Action plan in progress</td></tr>
    </tbody>
  </table>
</div>

</div>
</div>
<script>
const dt={color:'#506070',font:{size:9}};
const dg={color:'rgba(180,200,220,0.4)'};
const wks=['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'];
new Chart('k1',{type:'line',data:{labels:wks,datasets:[{data:[6.2,5.8,5.4,4.9,4.5,4.1,3.7,3.4,3.2,3.0,3.1,3.2],borderColor:'#1d9e75',backgroundColor:'rgba(29,158,117,0.08)',fill:true,borderWidth:2,tension:0.3,pointRadius:4,pointBackgroundColor:'#1d9e75'},{data:Array(12).fill(4),borderColor:'#e24b4a',borderDash:[5,3],borderWidth:2,fill:false,pointRadius:0}]},options:{responsive:true,maintainAspectRatio:false,layout:{padding:{top:14,right:8}},plugins:{legend:{display:false}},scales:{x:{ticks:dt,grid:{display:false},title:{display:true,text:'Week',font:{size:9},color:'#506070'}},y:{min:2,max:7,ticks:{...dt,stepSize:1},grid:dg,title:{display:true,text:'Avg cycle time (days)',font:{size:9},color:'#506070'}}}}});
new Chart('k2',{type:'bar',data:{labels:['Salesforce config','API errors','Process queries','Manual recon','Other'],datasets:[{data:[58,32,28,22,20],backgroundColor:['rgba(163,45,45,0.85)','rgba(186,117,23,0.85)','rgba(29,158,117,0.85)','rgba(186,117,23,0.85)','rgba(29,158,117,0.85)'],borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,layout:{padding:{top:14,right:8}},plugins:{legend:{display:false}},scales:{x:{ticks:dt,grid:{display:false},title:{display:true,text:'Issue category',font:{size:9},color:'#506070'}},y:{ticks:dt,grid:dg,title:{display:true,text:'Open items',font:{size:9},color:'#506070'}}}}});
new Chart('k3',{type:'bar',data:{labels:['Cycle time (days)','Defect rate (%)','Manual steps','Backlog (items/10)'],datasets:[{label:'Before optimisation',data:[6.2,12.1,18,19.5],backgroundColor:'rgba(163,45,45,0.8)',borderRadius:4},{label:'After optimisation',data:[3.2,8.3,8,14.2],backgroundColor:'rgba(29,158,117,0.8)',borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,layout:{padding:{top:14,right:8}},plugins:{legend:{labels:{color:'#405060',font:{size:9}}}},scales:{x:{ticks:dt,grid:{display:false}},y:{ticks:dt,grid:dg}}}});
const allW=['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12','W13','W14','W15','W16'];
const cr=[18,22,19,24,21,25,23,20,17,15,13,12,11,10,11,10];
new Chart('k4',{type:'line',data:{labels:allW,datasets:[{data:cr,borderColor:cr.map((v,i)=>i<8?'#534ab7':'#1d9e75'),backgroundColor:'rgba(29,158,117,0.06)',fill:true,borderWidth:2,tension:0.3,pointRadius:3,pointBackgroundColor:cr.map((v,i)=>i<8?'#534ab7':'#1d9e75'),segment:{borderColor:ctx=>ctx.p0DataIndex<8?'#534ab7':'#1d9e75'}},{data:Array(16).fill(15),borderColor:'#ba7517',borderDash:[5,3],borderWidth:2,fill:false,pointRadius:0}]},options:{responsive:true,maintainAspectRatio:false,layout:{padding:{top:14,right:8}},plugins:{legend:{display:false}},scales:{x:{ticks:{...dt,maxRotation:45,autoSkip:true},grid:{display:false},title:{display:true,text:'Week',font:{size:9},color:'#506070'}},y:{min:5,max:30,ticks:dt,grid:dg,title:{display:true,text:'Unplanned change requests',font:{size:9},color:'#506070'}}}}});
</script>
</body>
</html>`

export default function KPIScorecardDashboard() {
  return (
    <iframe
      srcDoc={html}
      style={{ width: '100%', minHeight: '600px', border: 'none' }}
      title="KPI Scorecard & Process Optimisation Dashboard"
    />
  )
}
