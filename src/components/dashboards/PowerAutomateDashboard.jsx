const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Segoe UI',sans-serif;background:#f0f4f8;color:#1a2a3a;padding:12px;}
.hdr{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#1a3a6a;border-radius:8px 8px 0 0;}
.hdr-title{font-size:14px;font-weight:600;color:#e8f0ff;}
.hdr-sub{font-size:10px;color:#90a8d0;margin-top:2px;}
.badge{display:inline-block;font-size:10px;padding:2px 8px;border-radius:4px;font-weight:500;background:#2a5aaa;color:#ddeeff;margin-right:4px;}
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
.card{background:#ffffff;border:0.5px solid #c8d8e8;border-radius:10px;padding:14px;box-shadow:0 1px 4px rgba(0,0,0,0.06);}
.card h4{font-size:13px;font-weight:700;color:#1a2a3a;margin:0 0 4px;}
.card p.desc{font-size:11px;color:#4a6070;margin:0 0 10px;line-height:1.5;}
.ins{background:#e4f0ff;border:0.5px solid #90b8e0;border-radius:8px;padding:10px 14px;margin-bottom:12px;}
.ins p{font-size:11px;color:#1a3a5a;margin:0;line-height:1.6;}
.step-box{border-radius:8px;padding:10px 14px;text-align:center;width:100%;margin-bottom:2px;}
.trigger{background:#ddeeff;border:2px solid #378add;}
.process{background:#eeeeff;border:1px solid #9090c0;}
.condbox{background:#f5eeff;border:2px solid #8050c0;}
.actbox{background:#ddffee;border:1px solid #1d9e75;}
.skipbox{background:#f4f4f4;border:1px solid #aaaaaa;}
.step-label{font-size:11px;font-weight:700;margin:0 0 3px;}
.step-detail{font-size:10px;color:#3a4a5a;margin:0 0 2px;line-height:1.4;}
.step-tech{font-size:10px;font-style:italic;margin:0;}
.trigger .step-label{color:#0a3a7a;}.process .step-label{color:#2a2a7a;}.condbox .step-label{color:#5a1a8a;}.actbox .step-label{color:#0a5a30;}.skipbox .step-label{color:#5a5a5a;}
.trigger .step-tech{color:#1a5aaa;}.process .step-tech{color:#5050a0;}.condbox .step-tech{color:#7040b0;}.actbox .step-tech{color:#0f6e56;}.skipbox .step-tech{color:#888888;}
.arr{display:flex;justify-content:center;margin:4px 0;color:#607080;font-size:18px;font-weight:bold;}
.branch-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:3px 0;}
.true-lbl{text-align:center;font-size:10px;font-weight:700;padding:3px 6px;border-radius:4px;margin-bottom:4px;color:#0a5a30;background:#c8f0d8;}
.false-lbl{text-align:center;font-size:10px;font-weight:700;padding:3px 6px;border-radius:4px;margin-bottom:4px;color:#5a0a0a;background:#f0c8c8;}
.loop-box{border:2px dashed #6060b0;border-radius:10px;padding:10px;margin:4px 0;background:#f8f8ff;}
.loop-lbl{font-size:10px;color:#3a3a8a;margin-bottom:8px;font-weight:700;}
.icon{font-size:16px;margin-bottom:4px;}
</style>
</head>
<body>
<div style="border:0.5px solid #c8d8e8;border-radius:10px;overflow:hidden;">
<div class="hdr">
  <div><div class="hdr-title">SLA & Workflow Automation — JSON to SharePoint Pipeline</div><div class="hdr-sub">Power Automate · Daily scheduled flow · Verra Mobility UK · HADECS platform integration</div></div>
  <span class="badge">Process Automation</span>
</div>
<div style="padding:12px;">
<div class="ins"><p><strong style="color:#0a2a4a;">Flow purpose:</strong> Automated daily pipeline scanning a SharePoint folder for new JSON dashboard exports from the HADECS enforcement platform. Each file is processed through conditional logic — if new, a timestamped archive filename is composed, existence is verified, and a copy is written to the SharePoint archive. This eliminated all manual data collection, reducing errors by 35% and achieving 97% SLA rate post-deployment.</p></div>
<div class="kpis">
  <div class="kpi g"><p class="lb">Efficiency gain</p><p class="vl">35%</p><p class="sb">vs manual data collection</p></div>
  <div class="kpi b"><p class="lb">Fewer data defects</p><p class="vl">35%</p><p class="sb">Reduction in reporting errors</p></div>
  <div class="kpi p"><p class="lb">SLA rate achieved</p><p class="vl">97%</p><p class="sb">Post-automation deployment</p></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1.5fr;gap:14px;">
<div class="card">
  <h4>Power Automate flow — complete step-by-step logic</h4>
  <p class="desc">"Download dashboard JSON to SharePoint (Daily)" — all steps, conditions, loop and branches</p>
  <div class="step-box trigger"><div class="icon">🔁</div><p class="step-label">Recurrence trigger</p><p class="step-detail">Fires once daily at configured schedule time</p><p class="step-tech">Power Automate scheduler — no manual action required</p></div>
  <div class="arr">↓</div>
  <div class="step-box process"><div class="icon">📂</div><p class="step-label">List files in folder</p><p class="step-detail">Retrieves all files in the target SharePoint folder path</p><p class="step-tech">SharePoint connector · folder path set in flow configuration</p></div>
  <div class="arr">↓</div>
  <div class="step-box process"><div class="icon">🔍</div><p class="step-label">Filter array</p><p class="step-detail">Filters file list to .json files only — excludes already-processed items</p><p class="step-tech">OData filter expression · file extension check</p></div>
  <div class="arr">↓</div>
  <div class="step-box process"><div class="icon">📝</div><p class="step-label">Initialise variable — FilePath</p><p class="step-detail">Empty string variable to store the current file's SharePoint path</p><p class="step-tech">String type · scope: current flow run</p></div>
  <div class="arr">↓</div>
  <div class="step-box process"><div class="icon">📝</div><p class="step-label">Initialise variable 1 — ArchiveName</p><p class="step-detail">Empty string variable to store the composed timestamped archive filename</p><p class="step-tech">String type · populated by Compose step later</p></div>
  <div class="arr">↓</div>
  <div class="loop-box">
    <div class="loop-lbl">🔄 For each — iterates over every file in filtered array</div>
    <div class="step-box process"><p class="step-label">Select</p><p class="step-detail">Maps file object properties to clean schema (name, path, modified date)</p><p class="step-tech">Select action · custom mapping expression</p></div>
    <div class="arr">↓</div>
    <div class="step-box condbox"><p class="step-label">Condition — has file been processed before?</p><p class="step-detail">Checks if FilePath variable is non-empty — indicates file seen in prior run</p><p class="step-tech">Expression: empty(variables('FilePath')) equals false</p></div>
    <div class="branch-row">
      <div>
        <div class="true-lbl">✓ True — new file to process</div>
        <div class="step-box actbox"><p class="step-label">Set variable — FilePath</p><p class="step-detail">Stores current file's SharePoint path into FilePath variable</p><p class="step-tech">triggerOutputs()?['body/Path']</p></div>
        <div class="arr" style="margin:3px 0;">↓</div>
        <div class="step-box actbox"><p class="step-label">Set variable 1 — ArchiveName</p><p class="step-detail">Stores filename with date prefix into ArchiveName variable</p><p class="step-tech">formatDateTime(utcNow(),'yyyyMMdd') + '_' + filename</p></div>
      </div>
      <div>
        <div class="false-lbl">✗ False — already seen</div>
        <div class="step-box skipbox"><p class="step-label">Skip to next</p><p class="step-detail">File processed in a previous run — no action, loop continues</p><p class="step-tech">Empty branch · iteration continues</p></div>
      </div>
    </div>
  </div>
  <div class="arr">↓</div>
  <div class="step-box process"><div class="icon">📄</div><p class="step-label">Get file content using path 1</p><p class="step-detail">Retrieves full binary content of the JSON file from SharePoint path</p><p class="step-tech">SharePoint connector · uses FilePath variable as input</p></div>
  <div class="arr">↓</div>
  <div class="step-box process"><div class="icon">🏷️</div><p class="step-label">Compose — ArchiveFileName</p><p class="step-detail">Builds full archive path including folder + timestamped filename string</p><p class="step-tech">concat('/Archive/', variables('ArchiveName'))</p></div>
  <div class="arr">↓</div>
  <div class="step-box process"><div class="icon">🔎</div><p class="step-label">Get files (properties only)</p><p class="step-detail">Checks SharePoint archive folder for existing file matching composed name</p><p class="step-tech">SharePoint · Get files · filter by Compose output value</p></div>
  <div class="arr">↓</div>
  <div class="step-box condbox"><p class="step-label">Condition 1 — does archive file already exist?</p><p class="step-detail">Checks if Get files response returned zero results (no duplicate)</p><p class="step-tech">Expression: length(body('Get_files')?['value']) equals 0</p></div>
  <div class="branch-row">
    <div>
      <div class="true-lbl">✓ True — create new archive</div>
      <div class="step-box actbox"><p class="step-label">Create file 2</p><p class="step-detail">Writes new file to SharePoint archive using composed name and retrieved content</p><p class="step-tech">SharePoint · Create file · folder + file content from Get file</p></div>
    </div>
    <div>
      <div class="false-lbl">✗ False — already archived</div>
      <div class="step-box skipbox"><p class="step-label">Skip — no duplicate</p><p class="step-detail">Archive copy already present in folder — no duplicate created</p><p class="step-tech">Empty branch · iteration ends</p></div>
    </div>
  </div>
</div>
<div>
  <div class="card" style="margin-bottom:12px;">
    <h4>Technology stack</h4>
    <p class="desc">Platforms and connectors across the pipeline</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
      <div style="background:#e8f0ff;border-radius:6px;padding:8px 10px;border-left:3px solid #378add;"><p style="font-size:10px;color:#0a3060;font-weight:600;margin:0 0 2px;">Automation engine</p><p style="font-size:13px;font-weight:700;color:#185fa5;margin:0;">Power Automate</p></div>
      <div style="background:#f0eeff;border-radius:6px;padding:8px 10px;border-left:3px solid #534ab7;"><p style="font-size:10px;color:#2a1a6a;font-weight:600;margin:0 0 2px;">Storage</p><p style="font-size:13px;font-weight:700;color:#3c3489;margin:0;">SharePoint Online</p></div>
      <div style="background:#e8fff4;border-radius:6px;padding:8px 10px;border-left:3px solid #1d9e75;"><p style="font-size:10px;color:#0a4020;font-weight:600;margin:0 0 2px;">Reporting layer</p><p style="font-size:13px;font-weight:700;color:#0f6e56;margin:0;">Power BI</p></div>
      <div style="background:#fff4e8;border-radius:6px;padding:8px 10px;border-left:3px solid #ba7517;"><p style="font-size:10px;color:#4a2800;font-weight:600;margin:0 0 2px;">Source platform</p><p style="font-size:13px;font-weight:700;color:#854f0b;margin:0;">HADECS / ServiceNow</p></div>
      <div style="background:#fff0e8;border-radius:6px;padding:8px 10px;border-left:3px solid #d85a30;"><p style="font-size:10px;color:#4a1800;font-weight:600;margin:0 0 2px;">Ticketing</p><p style="font-size:13px;font-weight:700;color:#993c1d;margin:0;">JIRA</p></div>
      <div style="background:#f4f4f4;border-radius:6px;padding:8px 10px;border-left:3px solid #888780;"><p style="font-size:10px;color:#2a2a2a;font-weight:600;margin:0 0 2px;">Data format</p><p style="font-size:13px;font-weight:700;color:#5f5e5a;margin:0;">JSON</p></div>
    </div>
  </div>
  <div class="card" style="margin-bottom:12px;">
    <h4>Before vs after automation</h4>
    <p class="desc">Key process metrics — manual vs automated pipeline</p>
    <div style="position:relative;height:180px;"><canvas id="pa1"></canvas></div>
  </div>
  <div class="card">
    <h4>SLA performance trend — post-automation</h4>
    <p class="desc">Monthly SLA rate after deployment — red dashed = 95% target</p>
    <div style="position:relative;height:160px;"><canvas id="pa2"></canvas></div>
  </div>
</div>
</div>
</div>
</div>
<script>
const dt={color:'#506070',font:{size:9}};
const dg={color:'rgba(180,200,220,0.4)'};
new Chart('pa1',{type:'bar',data:{labels:['Collection time (hrs)','Error rate (%)','Manual steps','SLA breach (%)'],datasets:[{label:'Before',data:[8,12,15,18],backgroundColor:'rgba(163,45,45,0.8)',borderRadius:3},{label:'After',data:[0,3,2,3],backgroundColor:'rgba(29,158,117,0.8)',borderRadius:3}]},options:{responsive:true,maintainAspectRatio:false,layout:{padding:{top:16,right:8}},plugins:{legend:{labels:{color:'#405060',font:{size:9}}}},scales:{x:{ticks:dt,grid:{display:false}},y:{ticks:dt,grid:dg,title:{display:true,text:'Value',font:{size:9},color:'#506070'}}}}});
const mo=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
new Chart('pa2',{type:'line',data:{labels:mo,datasets:[{data:[88,91,93,95,94,97,96,98,97,97,96,97],borderColor:'#1d9e75',backgroundColor:'rgba(29,158,117,0.08)',fill:true,borderWidth:2,tension:0.3,pointRadius:3,pointBackgroundColor:'#1d9e75'},{data:Array(12).fill(95),borderColor:'#e24b4a',borderDash:[5,3],borderWidth:1.5,fill:false,pointRadius:0}]},options:{responsive:true,maintainAspectRatio:false,layout:{padding:{top:14,right:8}},plugins:{legend:{display:false}},scales:{x:{ticks:dt,grid:{display:false}},y:{min:80,max:100,ticks:{...dt,callback:v=>v+'%'},grid:dg,title:{display:true,text:'SLA rate %',font:{size:9},color:'#506070'}}}}});
</script>
</body>
</html>`

export default function PowerAutomateDashboard() {
  return (
    <iframe
      srcDoc={html}
      style={{ width: '100%', minHeight: '600px', border: 'none' }}
      title="SLA & Workflow Automation Dashboard"
    />
  )
}
