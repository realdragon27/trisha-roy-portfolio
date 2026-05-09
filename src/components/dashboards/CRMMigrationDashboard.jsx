const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Segoe UI',sans-serif;background:#f4f6f8;color:#1a2a3a;padding:12px;}
.hdr{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#2a1a4a;border-radius:8px 8px 0 0;}
.hdr-title{font-size:14px;font-weight:600;color:#ece8ff;}
.hdr-sub{font-size:10px;color:#a090c0;margin-top:2px;}
.badge{display:inline-block;font-size:10px;padding:2px 8px;border-radius:4px;font-weight:500;background:#4a2a8a;color:#ddd0ff;margin-right:4px;}
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
.card p.desc{font-size:11px;color:#4a5a6a;margin:0 0 10px;line-height:1.5;}
.ins{background:#ede8ff;border:0.5px solid #a090d0;border-radius:8px;padding:10px 14px;margin-bottom:12px;}
.ins p{font-size:11px;color:#2a1a4a;margin:0;line-height:1.6;}
.phase{border-radius:10px;padding:12px;height:100%;}
.phase.src{background:#fff4e8;border:1.5px solid #d85a30;}
.phase.etl{background:#fff8e8;border:1.5px solid #ba7517;}
.phase.load{background:#e8fff4;border:1.5px solid #1d9e75;}
.phase.tgt{background:#e8f4ff;border:1.5px solid #378add;}
.phase h5{font-size:12px;font-weight:700;margin:0 0 4px;}
.phase.src h5{color:#6a2a0a;}.phase.etl h5{color:#5a3a00;}.phase.load h5{color:#0a5a30;}.phase.tgt h5{color:#0a3a6a;}
.phase p.ps{font-size:10px;margin:0 0 8px;}
.phase.src p.ps{color:#8a4020;}.phase.etl p.ps{color:#7a5010;}.phase.load p.ps{color:#1a7a40;}.phase.tgt p.ps{color:#1a5a8a;}
.step-item{border-radius:6px;padding:7px 10px;margin-bottom:6px;font-size:10px;font-weight:600;}
.src-step{background:#ffe0c0;color:#5a2a0a;}
.etl-step{background:#ffeec0;color:#4a3000;}
.load-step{background:#c0f0d8;color:#0a4020;}
.tgt-step{background:#c0e0f8;color:#0a2a5a;}
.step-sub{font-size:10px;font-weight:400;color:#4a5a6a;margin-top:2px;}
.arr-right{display:flex;align-items:center;justify-content:center;color:#8080a0;font-size:20px;font-weight:bold;}
.bx{display:inline-block;font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;}
table{width:100%;border-collapse:collapse;font-size:11px;table-layout:fixed;}
thead tr{background:#f0eeff;}
th{padding:5px 6px;text-align:left;color:#3a2a7a;font-weight:600;}
td{padding:5px 6px;color:#2a3a4a;border-bottom:0.5px solid #e0e8f0;}
</style>
</head>
<body>
<div style="border:0.5px solid #d0d8e8;border-radius:10px;overflow:hidden;">
<div class="hdr">
  <div><div class="hdr-title">Legacy CRM to Salesforce Migration — HPE</div><div class="hdr-sub">SQL · Excel · Salesforce · Zoho CRM · 50,000+ records · 80+ field mappings · Zero data loss</div></div>
  <span class="badge">Data Migration</span>
</div>
<div style="padding:12px;">
<div class="ins"><p><strong style="color:#2a0a4a;">Project summary:</strong> Coordinated JAD sessions and documented 80+ field mappings for migration of 50,000+ customer records from a legacy Zoho CRM instance to Salesforce. Defined ETL transformation rules, data cleansing logic, deduplication protocols and validation procedures. Delivered full production migration with zero data loss and complete stakeholder sign-off.</p></div>
<div class="kpis">
  <div class="kpi g"><p class="lb">Records migrated</p><p class="vl">50K+</p><p class="sb">Customer records moved to Salesforce</p></div>
  <div class="kpi b"><p class="lb">Field mappings documented</p><p class="vl">80+</p><p class="sb">Source-to-target field register</p></div>
  <div class="kpi p"><p class="lb">Data loss</p><p class="vl">Zero</p><p class="sb">Full integrity verified post-migration</p></div>
</div>

<div style="display:grid;grid-template-columns:1fr 30px 1.2fr 30px 1.1fr 30px 1fr;gap:0;align-items:start;margin-bottom:14px;">
  <div class="phase src">
    <h5>Source</h5><p class="ps">Zoho CRM (legacy)</p>
    <div class="step-item src-step">50K+ customer records<div class="step-sub">Accounts, contacts, interactions</div></div>
    <div class="step-item src-step">Account data<div class="step-sub">Company, address, industry</div></div>
    <div class="step-item src-step">Contact data<div class="step-sub">Name, role, email, phone</div></div>
    <div class="step-item src-step">Historical activity<div class="step-sub">Calls, emails, meetings log</div></div>
    <div class="step-item src-step">Custom fields<div class="step-sub">HPE-specific attributes</div></div>
  </div>
  <div class="arr-right">→</div>
  <div class="phase etl">
    <h5>Extract &amp; Transform</h5><p class="ps">SQL · Excel · JAD sessions</p>
    <div class="step-item etl-step">JAD session workshops<div class="step-sub">Cross-team requirements gathering</div></div>
    <div class="step-item etl-step">80+ field mappings<div class="step-sub">Source → target documented in Excel</div></div>
    <div class="step-item etl-step">ETL transformation rules<div class="step-sub">Data type conversions, format rules</div></div>
    <div class="step-item etl-step">SQL data cleansing<div class="step-sub">Nulls, duplicates, invalid values</div></div>
    <div class="step-item etl-step">Deduplication logic<div class="step-sub">Email + name composite key</div></div>
    <div class="step-item etl-step">Staging environment load<div class="step-sub">Test run before production</div></div>
    <div class="step-item etl-step">Validation checks<div class="step-sub">Row counts, field completeness</div></div>
  </div>
  <div class="arr-right">→</div>
  <div class="phase load">
    <h5>Load &amp; Validate</h5><p class="ps">Salesforce · UAT</p>
    <div class="step-item load-step">Salesforce sandbox load<div class="step-sub">Pre-production environment test</div></div>
    <div class="step-item load-step">UAT with stakeholders<div class="step-sub">Business sign-off sessions</div></div>
    <div class="step-item load-step">Data integrity checks<div class="step-sub">Record counts vs source</div></div>
    <div class="step-item load-step">Field accuracy validation<div class="step-sub">Sample-based spot checks</div></div>
    <div class="step-item load-step">Production migration<div class="step-sub">Full cutover to live Salesforce</div></div>
  </div>
  <div class="arr-right">→</div>
  <div class="phase tgt">
    <h5>Target</h5><p class="ps">Salesforce CRM (live)</p>
    <div class="step-item tgt-step">50K+ records live<div class="step-sub">All accounts and contacts</div></div>
    <div class="step-item tgt-step">Zero data loss<div class="step-sub">Full integrity confirmed</div></div>
    <div class="step-item tgt-step">Full audit trail<div class="step-sub">Change log maintained</div></div>
    <div class="step-item tgt-step">Stakeholder sign-off<div class="step-sub">All business owners approved</div></div>
  </div>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
  <div class="card">
    <h4>Migration progress by record category</h4>
    <p class="desc">Records migrated vs total source records per category</p>
    <div style="position:relative;height:180px;"><canvas id="cm1"></canvas></div>
  </div>
  <div class="card">
    <h4>Data quality issues resolved during ETL</h4>
    <p class="desc">Issues identified and resolved before production migration</p>
    <div style="position:relative;height:180px;"><canvas id="cm2"></canvas></div>
  </div>
</div>

<div class="card">
  <h4>Governance documentation produced</h4>
  <p class="desc">Key deliverables and artefacts from the migration project</p>
  <table>
    <thead><tr><th>Document</th><th>Purpose</th><th>Owner</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Field mapping register (80+ mappings)</td><td>Source-to-target field documentation</td><td>Trisha Roy — BA</td><td><span class="bx" style="background:#c0f0d8;color:#0a4020;">Completed</span></td></tr>
      <tr><td>ETL transformation rules</td><td>Data type and format conversion logic</td><td>Trisha Roy — BA</td><td><span class="bx" style="background:#c0f0d8;color:#0a4020;">Completed</span></td></tr>
      <tr><td>Data cleansing log</td><td>Record of all SQL cleansing operations</td><td>Trisha Roy — BA</td><td><span class="bx" style="background:#c0f0d8;color:#0a4020;">Completed</span></td></tr>
      <tr><td>UAT sign-off records</td><td>Stakeholder approval documentation</td><td>Business owners</td><td><span class="bx" style="background:#c0f0d8;color:#0a4020;">Signed off</span></td></tr>
      <tr><td>Rollback plan</td><td>Contingency if production migration fails</td><td>Trisha Roy — BA</td><td><span class="bx" style="background:#c0f0d8;color:#0a4020;">Completed</span></td></tr>
      <tr><td>Post-migration validation report</td><td>Confirms zero data loss and field accuracy</td><td>Trisha Roy — BA</td><td><span class="bx" style="background:#c0f0d8;color:#0a4020;">Completed</span></td></tr>
    </tbody>
  </table>
</div>

</div>
</div>
<script>
const dt={color:'#506070',font:{size:9}};
const dg={color:'rgba(180,200,220,0.4)'};
new Chart('cm1',{type:'bar',data:{labels:['Accounts','Contacts','Activities','Custom fields','Opportunities'],datasets:[{label:'Migrated',data:[18500,22000,6800,2200,500],backgroundColor:'rgba(29,158,117,0.8)',borderRadius:3},{label:'Source total',data:[18500,22000,6800,2200,500],backgroundColor:'rgba(55,138,221,0.3)',borderRadius:3}]},options:{responsive:true,maintainAspectRatio:false,layout:{padding:{top:16,right:8}},plugins:{legend:{labels:{color:'#405060',font:{size:9}}}},scales:{x:{ticks:dt,grid:{display:false}},y:{ticks:{...dt,callback:v=>v>=1000?(v/1000).toFixed(0)+'K':v},grid:dg,title:{display:true,text:'Record count',font:{size:9},color:'#506070'}}}}});
new Chart('cm2',{type:'bar',data:{labels:['Duplicate records','Null values','Invalid formats','Broken references','Encoding errors'],datasets:[{label:'Issues found',data:[342,891,156,78,23],backgroundColor:'rgba(163,45,45,0.8)',borderRadius:3},{label:'Issues resolved',data:[342,891,156,78,23],backgroundColor:'rgba(29,158,117,0.8)',borderRadius:3}]},options:{responsive:true,maintainAspectRatio:false,layout:{padding:{top:16,right:8}},plugins:{legend:{labels:{color:'#405060',font:{size:9}}}},scales:{x:{ticks:dt,grid:{display:false}},y:{ticks:dt,grid:dg,title:{display:true,text:'Number of records',font:{size:9},color:'#506070'}}}}});
</script>
</body>
</html>`

export default function CRMMigrationDashboard() {
  return (
    <iframe
      srcDoc={html}
      style={{ width: '100%', minHeight: '600px', border: 'none' }}
      title="Legacy CRM to Salesforce Migration Dashboard"
    />
  )
}
