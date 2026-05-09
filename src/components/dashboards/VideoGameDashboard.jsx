const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Segoe UI',sans-serif;background:#0a1a2a;color:#c0d8e8;padding:12px;}
.hdr{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#0f3050;border-radius:8px 8px 0 0;}
.hdr-title{font-size:14px;font-weight:600;color:#e0f0ff;}
.hdr-sub{font-size:10px;color:#80b0d0;margin-top:2px;}
.badge{display:inline-block;font-size:10px;padding:2px 8px;border-radius:4px;font-weight:500;background:#1d9e75;color:#e1f5ee;margin-right:4px;}
.badge.personal{background:#ba7517;color:#faeeda;}
.tabs{display:flex;gap:4px;background:#082040;padding:6px 14px;flex-wrap:wrap;}
.tab{font-size:11px;padding:5px 10px;border-radius:6px;cursor:pointer;color:#80b0d0;border:0.5px solid #1d5080;white-space:nowrap;}
.tab.on{background:#1d9e75;color:#e1f5ee;font-weight:600;border-color:#1d9e75;}
.kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:10px 0;}
.kpi{border-radius:8px;padding:10px 12px;}
.kpi.t{background:#0a2a1a;border-left:3px solid #1d9e75;}
.kpi.b{background:#0a1a3a;border-left:3px solid #378add;}
.kpi.p{background:#1a0a3a;border-left:3px solid #534ab7;}
.kpi.a{background:#2a1a00;border-left:3px solid #ba7517;}
.kpi.r{background:#2a0a0a;border-left:3px solid #a32d2d;}
.kpi.c{background:#2a1008;border-left:3px solid #d85a30;}
.kpi p.lb{font-size:10px;margin:0 0 2px;}
.kpi.t p.lb{color:#5dcaa5;}.kpi.b p.lb{color:#6090c0;}.kpi.p p.lb{color:#9090d0;}.kpi.a p.lb{color:#c89040;}.kpi.r p.lb{color:#c85050;}.kpi.c p.lb{color:#c07050;}
.kpi p.vl{font-size:20px;font-weight:600;margin:0 0 1px;}
.kpi.t p.vl{color:#5dcaa5;}.kpi.b p.vl{color:#60a0e0;}.kpi.p p.vl{color:#9090e0;}.kpi.a p.vl{color:#e0a040;}.kpi.r p.vl{color:#e06060;}.kpi.c p.vl{color:#d08060;}
.kpi p.sb{font-size:10px;color:#406080;margin:0;}
.card{background:#0a1e30;border:0.5px solid #1d5080;border-radius:10px;padding:12px;}
.card h4{font-size:12px;font-weight:600;color:#a0c8e0;margin:0 0 2px;}
.card p.ax{font-size:10px;color:#406080;margin:0 0 6px;}
.lg{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:6px;}
.lg span{font-size:10px;color:#80b0d0;display:flex;align-items:center;gap:3px;}
.lg span b{width:10px;height:10px;border-radius:2px;display:inline-block;}
.bx{display:inline-block;font-size:9px;padding:2px 6px;border-radius:4px;font-weight:500;}
table{width:100%;border-collapse:collapse;font-size:11px;table-layout:fixed;}
thead tr{background:#0f3050;}
th{padding:5px 6px;text-align:left;color:#80b0d0;font-weight:500;}
td{padding:4px 6px;color:#c0d8e8;border-bottom:0.5px solid #1d4060;}
.ins{background:#082030;border:0.5px solid #1d5080;border-radius:8px;padding:8px 12px;margin-bottom:10px;}
.ins p{font-size:11px;color:#80b0d0;margin:0;line-height:1.5;}
.pg{display:none;}
.pg.on{display:block;}
</style>
</head>
<body>
<div style="border:0.5px solid #1d5080;border-radius:10px;overflow:hidden;">
<div class="hdr">
  <div><div class="hdr-title">Video Game Sales Analysis &nbsp;·&nbsp; 1980–2015</div><div class="hdr-sub">11,163 unique titles · 31 platforms · 564 publishers · 8,749m total units sold</div></div>
  <div><span class="badge">Data Analytics</span><span class="badge personal">Personal Project</span></div>
</div>
<div class="tabs">
  <div class="tab on" onclick="vgTab(1,this)">Executive Overview</div>
  <div class="tab" onclick="vgTab(2,this)">Regional Analysis</div>
  <div class="tab" onclick="vgTab(3,this)">Trend & Forecast</div>
  <div class="tab" onclick="vgTab(4,this)">Game Rankings</div>
  <div class="tab" onclick="vgTab(5,this)">Recommendations</div>
</div>
<div style="padding:0 12px 14px;">

<div id="vg1" class="pg on">
  <div class="ins" style="margin-top:10px;"><p><strong style="color:#a0c8e0;">Dataset:</strong> 1980–2015 · 11,163 unique titles · 15,979 platform releases. Market peaked at 678.9m units in 2008, contracting 39.9% since. North America drives 49.3% of global sales. Shooter is the only genre still growing.</p></div>
  <div class="kpis">
    <div class="kpi t"><p class="lb">Distinct games</p><p class="vl">11,163</p><p class="sb">Unique titles</p></div>
    <div class="kpi b"><p class="lb">Total global sales</p><p class="vl">8,749m</p><p class="sb">Units (millions)</p></div>
    <div class="kpi p"><p class="lb">Total platforms</p><p class="vl">31</p><p class="sb">All generations</p></div>
    <div class="kpi a"><p class="lb">Total publishers</p><p class="vl">564</p><p class="sb">Unique publishers</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>Total global sales (million) by genre</h4><p class="ax">X axis: genre &nbsp;|&nbsp; Y axis: total global sales (million units) &nbsp;|&nbsp; 1980–2015</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>Action</span><span><b style="background:#378add;"></b>Sports</span><span><b style="background:#e24b4a;"></b>Shooter</span><span><b style="background:#534ab7;"></b>Role-Playing</span><span><b style="background:#ba7517;"></b>Platform</span><span><b style="background:#888780;"></b>Other</span></div>
      <div style="position:relative;height:230px;"><canvas id="g1c1"></canvas></div>
    </div>
    <div class="card">
      <h4>Global sales (million units) by region</h4><p class="ax">X axis: sales (million units) &nbsp;|&nbsp; Y axis: region</p>
      <div class="lg"><span><b style="background:#378add;"></b>North America 4,311m</span><span><b style="background:#534ab7;"></b>Europe 2,382m</span><span><b style="background:#d85a30;"></b>Japan 1,271m</span><span><b style="background:#888780;"></b>Other 781m</span></div>
      <div style="position:relative;height:230px;"><canvas id="g1c2"></canvas></div>
    </div>
  </div>
  <div class="card">
    <h4>Top 10 games — North America vs Japan sales (bubble size = global sales)</h4><p class="ax">X axis: NA sales (million units) &nbsp;|&nbsp; Y axis: Japan sales (million units)</p>
    <div class="lg"><span><b style="background:#1d9e75;"></b>Action</span><span><b style="background:#378add;"></b>Platform</span><span><b style="background:#534ab7;"></b>Role-Playing</span><span><b style="background:#d85a30;"></b>Racing</span><span><b style="background:#e24b4a;"></b>Shooter</span><span><b style="background:#888780;"></b>Sports</span></div>
    <div style="position:relative;height:240px;"><canvas id="g1c3"></canvas></div>
  </div>
</div>

<div id="vg2" class="pg">
  <div class="ins" style="margin-top:10px;"><p><strong style="color:#a0c8e0;">Strategic insight:</strong> Shooter 56.3% NA-dominant — Western marketing priority. Role-Playing 37.8% Japan share — requires separate Japan-specific strategy. NA:Japan ratio = 3.39:1.</p></div>
  <div class="kpis" style="grid-template-columns:repeat(5,minmax(0,1fr));">
    <div class="kpi t"><p class="lb">NA Sales %</p><p class="vl">49.27%</p><p class="sb">4,311m units</p></div>
    <div class="kpi b"><p class="lb">EU Sales %</p><p class="vl">27.23%</p><p class="sb">2,382m units</p></div>
    <div class="kpi c"><p class="lb">JP Sales %</p><p class="vl">14.52%</p><p class="sb">1,271m units</p></div>
    <div class="kpi a"><p class="lb">Other Sales %</p><p class="vl">8.93%</p><p class="sb">781m units</p></div>
    <div class="kpi p"><p class="lb">NA:Japan Ratio</p><p class="vl">3.39:1</p><p class="sb">NA dominant</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>Region sales % by genre — stacked 100% bar</h4><p class="ax">X axis: % of genre sales &nbsp;|&nbsp; Y axis: genre</p>
      <div class="lg"><span><b style="background:#d85a30;"></b>JP %</span><span><b style="background:#378add;"></b>NA %</span><span><b style="background:#534ab7;"></b>EU %</span><span><b style="background:#888780;"></b>Other %</span></div>
      <div style="position:relative;height:300px;"><canvas id="g2c1"></canvas></div>
    </div>
    <div class="card">
      <h4>Regional share matrix by genre</h4><p class="ax">NA, EU and JP sales % — dominant region highlighted</p>
      <table>
        <thead><tr><th>Genre</th><th>NA Sales %</th><th>EU Sales %</th><th>JP Sales %</th><th>Dominant</th></tr></thead>
        <tbody>
          <tr><td>Shooter</td><td><span class="bx" style="background:#0a1a3a;color:#60a0e0;">56.32%</span></td><td style="color:#406080;">30.04%</td><td style="color:#406080;">3.73%</td><td><span class="bx" style="background:#0a1a3a;color:#60a0e0;">North America</span></td></tr>
          <tr><td>Platform</td><td><span class="bx" style="background:#0a1a3a;color:#60a0e0;">53.83%</span></td><td style="color:#406080;">24.16%</td><td><span class="bx" style="background:#2a0808;color:#e06060;">15.78%</span></td><td><span class="bx" style="background:#0a1a3a;color:#60a0e0;">North America</span></td></tr>
          <tr><td>Role-Playing</td><td style="color:#406080;">35.45%</td><td style="color:#406080;">20.31%</td><td><span class="bx" style="background:#2a0808;color:#e06060;">37.80%</span></td><td><span class="bx" style="background:#2a0808;color:#e06060;">Japan</span></td></tr>
          <tr><td>Sports</td><td><span class="bx" style="background:#0a1a3a;color:#60a0e0;">51.41%</span></td><td style="color:#406080;">28.11%</td><td style="color:#406080;">10.35%</td><td><span class="bx" style="background:#0a1a3a;color:#60a0e0;">North America</span></td></tr>
          <tr><td>Action</td><td><span class="bx" style="background:#0a1a3a;color:#60a0e0;">50.29%</span></td><td style="color:#406080;">29.97%</td><td style="color:#406080;">8.98%</td><td><span class="bx" style="background:#0a1a3a;color:#60a0e0;">North America</span></td></tr>
          <tr style="background:#0f3050;"><td><strong>Total</strong></td><td><strong>49.27%</strong></td><td><strong>27.23%</strong></td><td><strong>14.52%</strong></td><td><strong>North America</strong></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div id="vg3" class="pg">
  <div class="ins" style="margin-top:10px;"><p><strong style="color:#a0c8e0;">Market trend (1980–2015):</strong> Market peaked 678.9m units 2008 — driven by 7th Gen simultaneous console launch (PS3, Xbox 360, Wii). Puzzle (-87.7%) and Simulation (-72%) show steepest decline. Shooter (+16.1%) is the only genre with positive 5Y growth.</p></div>
  <div class="kpis">
    <div class="kpi t"><p class="lb">Sales last 5 years</p><p class="vl">1,849m</p><p class="sb">2011–2015</p></div>
    <div class="kpi b"><p class="lb">Sales previous 5 years</p><p class="vl">3,079m</p><p class="sb">2006–2010</p></div>
    <div class="kpi r"><p class="lb">5Y growth %</p><p class="vl">-39.9%</p><p class="sb">Market contraction</p></div>
    <div class="kpi a"><p class="lb">Avg units per release</p><p class="vl">0.55m</p><p class="sb">Per title last 5 yrs</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>Global sales by platform generation — 1980–2015</h4><p class="ax">X axis: launch year &nbsp;|&nbsp; Y axis: total global sales (million units)</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>8-bit era</span><span><b style="background:#378add;"></b>16/32-bit</span><span><b style="background:#534ab7;"></b>6th gen</span><span><b style="background:#d85a30;"></b>7th gen</span><span><b style="background:#ba7517;"></b>8th gen</span><span><b style="background:#888780;"></b>PC</span></div>
      <div style="position:relative;height:230px;"><canvas id="g3c1"></canvas></div>
    </div>
    <div class="card">
      <h4>Year-on-year growth % by launch year</h4><p class="ax">X axis: launch year &nbsp;|&nbsp; Y axis: YoY growth % &nbsp;|&nbsp; Green = growth · Red = decline</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>Positive YoY</span><span><b style="background:#e24b4a;"></b>Negative YoY</span></div>
      <div style="position:relative;height:230px;"><canvas id="g3c2"></canvas></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
    <div class="card">
      <h4>5-year growth % by genre</h4><p class="ax">X axis: 5Y growth % &nbsp;|&nbsp; Y axis: genre &nbsp;|&nbsp; Bars cross zero — positive = right, negative = left</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>Growing (positive)</span><span><b style="background:#e24b4a;"></b>Declining (negative)</span></div>
      <div style="position:relative;height:340px;"><canvas id="g3c3"></canvas></div>
    </div>
    <div class="card">
      <h4>Top 5 genre evolution — 2005 to 2014</h4><p class="ax">X axis: launch year &nbsp;|&nbsp; Y axis: total global sales (million)</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>Action</span><span><b style="background:#888780;"></b>Misc</span><span><b style="background:#534ab7;"></b>Role-Playing</span><span><b style="background:#e24b4a;"></b>Shooter</span><span><b style="background:#ba7517;"></b>Sports</span></div>
      <div style="position:relative;height:340px;"><canvas id="g3c4"></canvas></div>
    </div>
  </div>
</div>

<div id="vg4" class="pg">
  <div class="kpis">
    <div class="kpi t"><p class="lb">Top game globally</p><p class="vl" style="font-size:14px;">Wii Sports</p><p class="sb">80.74m (Nintendo)</p></div>
    <div class="kpi b"><p class="lb">Top game NA</p><p class="vl" style="font-size:14px;">Wii Sports</p><p class="sb">41.49m units</p></div>
    <div class="kpi a"><p class="lb">Top game Europe</p><p class="vl" style="font-size:14px;">Wii Sports</p><p class="sb">29.02m units</p></div>
    <div class="kpi c"><p class="lb">Top game Japan</p><p class="vl" style="font-size:14px;">Pokemon R/B</p><p class="sb">10.22m units</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
    <div class="card">
      <h4>Top 10 publishers by historical sales</h4><p class="ax">X axis: total global sales (million units) &nbsp;|&nbsp; Y axis: publisher</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>Nintendo 1,781m</span><span><b style="background:#378add;"></b>EA 1,081m</span><span><b style="background:#e24b4a;"></b>Activision 716m</span></div>
      <div style="position:relative;height:300px;"><canvas id="g4c1"></canvas></div>
    </div>
    <div class="card">
      <h4>Top 10 game rank by historical sales</h4><p class="ax">Green row = still selling last 5 years &nbsp;|&nbsp; Star = top 5% in genre</p>
      <table>
        <thead><tr><th style="width:8%;">#</th><th>Game</th><th>Genre</th><th>Publisher</th><th>Global (m)</th></tr></thead>
        <tbody>
          <tr style="background:#082a10;"><td style="color:#5dcaa5;font-weight:600;">1</td><td style="color:#5dcaa5;font-weight:600;">Wii Sports</td><td style="color:#5dcaa5;">Sports</td><td style="color:#5dcaa5;">Nintendo</td><td style="color:#5dcaa5;font-weight:600;">80.74</td></tr>
          <tr style="background:#082a10;"><td style="color:#5dcaa5;font-weight:600;">2</td><td style="color:#5dcaa5;font-weight:600;">GTA V</td><td style="color:#5dcaa5;">Action</td><td style="color:#5dcaa5;">Take-Two</td><td style="color:#5dcaa5;font-weight:600;">55.92</td></tr>
          <tr><td>3</td><td>Super Mario Bros.</td><td style="color:#406080;">Platform</td><td style="color:#406080;">Nintendo</td><td>45.31</td></tr>
          <tr><td>4</td><td>Tetris</td><td style="color:#406080;">Puzzle</td><td style="color:#406080;">Nintendo</td><td>35.84</td></tr>
          <tr><td>5</td><td>Mario Kart Wii</td><td style="color:#406080;">Racing</td><td style="color:#406080;">Nintendo</td><td>35.82</td></tr>
          <tr style="background:#082a10;"><td style="color:#5dcaa5;font-weight:600;">6</td><td style="color:#5dcaa5;font-weight:600;">Wii Sports Resort</td><td style="color:#5dcaa5;">Sports</td><td style="color:#5dcaa5;">Nintendo</td><td style="color:#5dcaa5;font-weight:600;">33.00</td></tr>
          <tr><td>7</td><td>Pokemon Red/Blue</td><td style="color:#406080;">RPG</td><td style="color:#406080;">Nintendo</td><td>31.37</td></tr>
          <tr style="background:#082a10;"><td style="color:#5dcaa5;font-weight:600;">8</td><td style="color:#5dcaa5;font-weight:600;">CoD: MW3</td><td style="color:#5dcaa5;">Shooter</td><td style="color:#5dcaa5;">Activision</td><td style="color:#5dcaa5;font-weight:600;">30.83</td></tr>
          <tr><td>9</td><td>New Super Mario Bros.</td><td style="color:#406080;">Platform</td><td style="color:#406080;">Nintendo</td><td>30.01</td></tr>
          <tr style="background:#082a10;"><td style="color:#5dcaa5;font-weight:600;">10</td><td style="color:#5dcaa5;font-weight:600;">CoD: Black Ops</td><td style="color:#5dcaa5;">Shooter</td><td style="color:#5dcaa5;">Activision</td><td style="color:#5dcaa5;font-weight:600;">29.72</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div id="vg5" class="pg">
  <div class="ins" style="margin-top:10px;"><p><strong style="color:#a0c8e0;">Combined recommendation</strong> (validated across all pages): Relative Performance = each genre's 5Y growth vs industry average (-39.94%). Shooter and Action are clear investment priorities. Puzzle and Simulation should be deprioritised.</p></div>
  <div class="kpis">
    <div class="kpi t"><p class="lb">Sales last 5 years</p><p class="vl">1,849m</p><p class="sb">2011–2015</p></div>
    <div class="kpi b"><p class="lb">Sales prev 5 years</p><p class="vl">3,079m</p><p class="sb">2006–2010</p></div>
    <div class="kpi r"><p class="lb">Industry 5Y growth</p><p class="vl">-39.94%</p><p class="sb">Market contraction</p></div>
    <div class="kpi p"><p class="lb">Top 5 publisher share</p><p class="vl">53.08%</p><p class="sb">4,644m units</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
    <div class="card">
      <h4>Relative performance by genre vs industry average</h4><p class="ax">X axis: relative performance % &nbsp;|&nbsp; Y axis: genre &nbsp;|&nbsp; vs industry avg (-39.94%)</p>
      <div class="lg"><span><b style="background:#1d9e75;"></b>Beating the market</span><span><b style="background:#e24b4a;"></b>Lagging the market</span></div>
      <div style="position:relative;height:340px;"><canvas id="g5c1"></canvas></div>
    </div>
    <div class="card">
      <h4>Genre performance vs market — recommendation table</h4><p class="ax">Ranked by priority — green = invest · amber = monitor · red = review</p>
      <table>
        <thead><tr><th>Genre</th><th>Priority</th><th>5Y Growth</th><th>Rel. Perf.</th><th>Recommendation</th></tr></thead>
        <tbody>
          <tr style="background:#082a10;"><td style="color:#5dcaa5;font-weight:600;">Shooter</td><td><span class="bx" style="background:#1d9e75;color:#e1f5ee;">1 — Priority</span></td><td style="color:#5dcaa5;font-weight:600;">+16.11%</td><td style="color:#5dcaa5;font-weight:600;">+56.05%</td><td><span class="bx" style="background:#1d9e75;color:#e1f5ee;">Invest</span></td></tr>
          <tr style="background:#082a10;"><td style="color:#5dcaa5;font-weight:600;">Action</td><td><span class="bx" style="background:#1d9e75;color:#e1f5ee;">1 — Priority</span></td><td style="color:#5dcaa5;font-weight:600;">+5.39%</td><td style="color:#5dcaa5;font-weight:600;">+34.55%</td><td><span class="bx" style="background:#1d9e75;color:#e1f5ee;">Invest</span></td></tr>
          <tr style="background:#082a10;"><td style="color:#5dcaa5;font-weight:600;">Role-Playing</td><td><span class="bx" style="background:#0f6e56;color:#e1f5ee;">2 — Maintain</span></td><td style="color:#5dcaa5;font-weight:600;">+18.39%</td><td style="color:#5dcaa5;font-weight:600;">+21.58%</td><td><span class="bx" style="background:#0f6e56;color:#e1f5ee;">Maintain</span></td></tr>
          <tr><td>Sports</td><td><span class="bx" style="background:#2a1a00;color:#e0a040;">4 — Monitor</span></td><td style="color:#c85050;">-61.18%</td><td style="color:#406080;">-21.24%</td><td><span class="bx" style="background:#2a1a00;color:#e0a040;">Monitor</span></td></tr>
          <tr><td>Simulation</td><td><span class="bx" style="background:#2a0808;color:#e06060;">6 — Low</span></td><td style="color:#c85050;">-72.02%</td><td style="color:#c85050;">-32.08%</td><td><span class="bx" style="background:#2a0808;color:#e06060;">Review</span></td></tr>
          <tr><td>Puzzle</td><td><span class="bx" style="background:#2a0808;color:#e06060;">6 — Low</span></td><td style="color:#c85050;">-87.73%</td><td style="color:#c85050;">-47.79%</td><td><span class="bx" style="background:#2a0808;color:#e06060;">Review</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
</div>

<script>
const gi={};
const genres=['Action','Sports','Shooter','Role-Playing','Platform','Misc','Racing','Fighting','Simulation','Puzzle','Adventure','Strategy'];
const gc=['#1d9e75','#378add','#e24b4a','#534ab7','#ba7517','#d85a30','#888780','#d4537e','#97c459','#ef9f27','#5dcaa5','#7f77dd'];
function vgTab(n,el){
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  document.getElementById('vg'+n).classList.add('on');
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  setTimeout(()=>gdraw(n),60);
}
const dt={color:'#80b0d0',font:{size:9}};
const dg={color:'rgba(29,80,128,0.3)'};
const bO=(xl,yl,maxY)=>({responsive:true,maintainAspectRatio:false,layout:{padding:{top:18,right:8}},plugins:{legend:{display:false}},scales:{x:{title:{display:true,text:xl,font:{size:9},color:'#406080'},ticks:{...dt,maxRotation:40,autoSkip:true,maxTicksLimit:9},grid:{display:false}},y:{title:{display:true,text:yl,font:{size:9},color:'#406080'},max:maxY,ticks:dt,grid:dg}}});
const hO=(xl,yl)=>({responsive:true,maintainAspectRatio:false,indexAxis:'y',layout:{padding:{right:44,top:4}},plugins:{legend:{display:false}},scales:{x:{title:{display:true,text:xl,font:{size:9},color:'#406080'},ticks:dt,grid:dg},y:{ticks:dt,grid:{display:false}}}});
function gdraw(n){
  if(gi[n])return;gi[n]=true;
  if(n===1){
    const sales=[1702,1295,1007,917,827,798,725,440,389,242,232,172];
    new Chart('g1c1',{type:'bar',data:{labels:genres,datasets:[{data:sales,backgroundColor:gc,borderRadius:3}]},options:{...bO('Genre','Total global sales (million units)',1900)}});
    new Chart('g1c2',{type:'bar',indexAxis:'y',data:{labels:['North America','Europe','Japan','Other Countries'],datasets:[{data:[4311,2382,1271,781],backgroundColor:['#378add','#534ab7','#d85a30','#888780'],borderRadius:3}]},options:{...hO('Global sales (million units)','Region')}});
    new Chart('g1c3',{type:'bubble',data:{datasets:[
      {label:'Pokemon R/B',data:[{x:9,y:10.2,r:18}],backgroundColor:'rgba(83,74,183,0.75)',borderColor:'#534ab7'},
      {label:'Super Mario Bros',data:[{x:29,y:6.1,r:20}],backgroundColor:'rgba(29,158,117,0.75)',borderColor:'#1d9e75'},
      {label:'Wii Sports',data:[{x:41,y:3.8,r:26}],backgroundColor:'rgba(55,138,221,0.75)',borderColor:'#378add'},
      {label:'GTA V',data:[{x:26,y:1.0,r:11}],backgroundColor:'rgba(216,90,48,0.75)',borderColor:'#d85a30'},
      {label:'Mario Kart Wii',data:[{x:15,y:3.3,r:10}],backgroundColor:'rgba(29,158,117,0.6)',borderColor:'#1d9e75'},
      {label:'CoD MW3',data:[{x:15,y:0.8,r:9}],backgroundColor:'rgba(226,75,74,0.75)',borderColor:'#e24b4a'},
      {label:'Tetris',data:[{x:23,y:4.2,r:13}],backgroundColor:'rgba(83,74,183,0.55)',borderColor:'#534ab7'},
      {label:'New SMB',data:[{x:14,y:6.5,r:10}],backgroundColor:'rgba(29,158,117,0.5)',borderColor:'#1d9e75'}
    ]},options:{responsive:true,maintainAspectRatio:false,layout:{padding:25},plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.dataset.label+': NA '+c.parsed.x+'m, JP '+c.parsed.y+'m'}}},scales:{x:{title:{display:true,text:'NA Sales (million units)',font:{size:9},color:'#406080'},min:0,max:50,ticks:dt,grid:dg},y:{title:{display:true,text:'JP Sales (million units)',font:{size:9},color:'#406080'},min:0,max:13,ticks:dt,grid:dg}}}});
  }
  if(n===2){
    const gL=['Role-Playing','Strategy','Puzzle','Adventure','Fighting','Simulation','Platform','Misc','Sports','Action','Racing','Shooter'];
    const jp=[37.88,28.45,23.45,21.99,19.65,16.25,15.79,13.30,10.55,8.98,7.81,7.21];
    const na=[35.46,30.26,50.48,43.78,49.78,46.64,53.89,50.55,51.42,50.29,49.20,56.35];
    const eu=[20.32,25.85,20.91,27.24,22.45,29.86,24.17,26.86,28.12,29.97,32.44,30.05];
    const ot=[6.43,5.48,5.18,7.13,8.12,8.05,6.19,9.30,10.10,10.76,10.55,6.67];
    new Chart('g2c1',{type:'bar',indexAxis:'y',data:{labels:gL,datasets:[{label:'JP %',data:jp,backgroundColor:'#d85a30',borderRadius:2},{label:'NA %',data:na,backgroundColor:'#378add',borderRadius:2},{label:'EU %',data:eu,backgroundColor:'#534ab7',borderRadius:2},{label:'Other %',data:ot,backgroundColor:'#888780',borderRadius:2}]},options:{responsive:true,maintainAspectRatio:false,layout:{padding:4},plugins:{legend:{display:false},tooltip:{mode:'index',intersect:false}},scales:{x:{title:{display:true,text:'% of genre sales by region',font:{size:9},color:'#406080'},stacked:true,ticks:{...dt,callback:v=>v+'%'},grid:dg},y:{stacked:true,ticks:dt,grid:{display:false}}}}});
  }
  if(n===3){
    const yrs=[];for(let y=1980;y<=2015;y++)yrs.push(y);
    const s8=[2,4,8,15,25,40,55,70,80,75,60,45,30,18,10,5,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const s16=[0,0,0,0,0,2,5,12,25,45,70,90,105,110,95,75,50,30,15,8,4,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const s6=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,15,35,65,95,115,120,105,80,55,30,15,8,4,2,1,0,0,0,0,0];
    const s7=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,20,60,130,240,370,480,550,580,530,460,380,290,200,130,80,45,25];
    const s8g=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,20,50,90,135,175,205,225];
    const spc=[1,2,3,4,5,6,8,10,12,14,16,18,20,22,20,18,16,15,14,13,12,11,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
    new Chart('g3c1',{type:'line',data:{labels:yrs,datasets:[
      {label:'8-bit',data:s8,borderColor:'#1d9e75',backgroundColor:'rgba(29,158,117,0.2)',fill:true,borderWidth:1.5,pointRadius:0,tension:0.4},
      {label:'16/32',data:s16,borderColor:'#378add',backgroundColor:'rgba(55,138,221,0.2)',fill:true,borderWidth:1.5,pointRadius:0,tension:0.4},
      {label:'6th',data:s6,borderColor:'#534ab7',backgroundColor:'rgba(83,74,183,0.2)',fill:true,borderWidth:1.5,pointRadius:0,tension:0.4},
      {label:'7th',data:s7,borderColor:'#d85a30',backgroundColor:'rgba(216,90,48,0.2)',fill:true,borderWidth:1.5,pointRadius:0,tension:0.4},
      {label:'8th',data:s8g,borderColor:'#ba7517',backgroundColor:'rgba(186,117,23,0.2)',fill:true,borderWidth:1.5,pointRadius:0,tension:0.4},
      {label:'PC',data:spc,borderColor:'#888780',backgroundColor:'rgba(136,135,128,0.1)',fill:true,borderWidth:1,pointRadius:0,tension:0.4}
    ]},options:{...bO('Launch year','Total global sales (million units)',700),plugins:{legend:{display:false},tooltip:{mode:'index',intersect:false}}}});
    const yrYoY=[1985,1987,1989,1991,1993,1995,1997,1999,2001,2003,2005,2007,2009,2011,2013,2015];
    const yoy=[85,110,40,-15,45,-10,35,25,60,80,110,-25,-30,-45,-50,-55];
    new Chart('g3c2',{type:'bar',data:{labels:yrYoY,datasets:[{data:yoy,backgroundColor:yoy.map(v=>v>=0?'#1d9e75':'#e24b4a'),borderRadius:2}]},options:{...bO('Launch year','YoY growth %',140),scales:{x:{title:{display:true,text:'Launch year',font:{size:9},color:'#406080'},ticks:{...dt,maxRotation:45,autoSkip:true},grid:{display:false}},y:{title:{display:true,text:'YoY growth %',font:{size:9},color:'#406080'},ticks:{...dt,callback:v=>v+'%'},grid:dg}}}});
    const g5=['Shooter','Action','Role-Playing','Fighting','Platform','Adventure','Strategy','Racing','Sports','Misc','Simulation','Puzzle'];
    const v5=[16.11,5.39,18.39,-48.84,-55.32,-56.55,-58.44,-59.11,-61.18,-66.70,-72.02,-87.73];
    new Chart('g3c3',{type:'bar',indexAxis:'y',data:{labels:g5,datasets:[{data:v5,backgroundColor:v5.map(v=>v>=0?'#1d9e75':'#e24b4a'),borderRadius:3}]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',layout:{padding:{right:42,left:8,top:4}},plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>'5Y Growth: '+(c.raw>0?'+':'')+c.raw.toFixed(1)+'%'}}},scales:{x:{title:{display:true,text:'5Y growth %',font:{size:9},color:'#406080'},min:-100,max:30,ticks:{...dt,callback:v=>(v>0?'+':'')+v+'%'},grid:dg},y:{ticks:dt,grid:{display:false}}}}});
    const yr2=['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014'];
    new Chart('g3c4',{type:'line',data:{labels:yr2,datasets:[
      {label:'Action',data:[180,230,280,380,460,480,420,360,290,240],borderColor:'#1d9e75',fill:false,borderWidth:2,pointRadius:3,pointBackgroundColor:'#1d9e75',tension:0.3},
      {label:'Misc',data:[75,82,88,100,105,100,92,82,70,62],borderColor:'#888780',fill:false,borderWidth:1.5,pointRadius:3,pointBackgroundColor:'#888780',tension:0.3},
      {label:'RPG',data:[58,65,72,82,78,74,68,63,58,53],borderColor:'#534ab7',fill:false,borderWidth:1.5,pointRadius:3,pointBackgroundColor:'#534ab7',tension:0.3},
      {label:'Shooter',data:[38,58,85,118,148,168,175,158,138,125],borderColor:'#e24b4a',fill:false,borderWidth:2,pointRadius:3,pointBackgroundColor:'#e24b4a',tension:0.3},
      {label:'Sports',data:[148,178,200,218,198,178,158,138,118,98],borderColor:'#ba7517',fill:false,borderWidth:1.5,pointRadius:3,pointBackgroundColor:'#ba7517',tension:0.3}
    ]},options:{...bO('Launch year','Total global sales (million)',540),plugins:{legend:{display:false},tooltip:{mode:'index',intersect:false}}}});
  }
  if(n===4){
    new Chart('g4c1',{type:'bar',indexAxis:'y',data:{labels:['Nintendo','Electronic Arts','Activision','Sony Computer Ent.','Ubisoft','Take-Two Interactive','THQ','Konami Digital','Sega','Namco Bandai'],datasets:[{data:[1781,1081,716,601,465,398,340,277,270,247],backgroundColor:['#1d9e75','#378add','#e24b4a','#534ab7','#d85a30','#ba7517','#888780','#d4537e','#97c459','#ef9f27'],borderRadius:3}]},options:{...hO('Total global sales (million units)','Publisher')}});
  }
  if(n===5){
    const rg=['Shooter','Action','Role-Playing','Fighting','Platform','Adventure','Strategy','Racing','Sports','Misc','Simulation','Puzzle'];
    const rd=[56.05,34.55,21.58,-8.40,-15.38,-16.61,-18.50,-19.17,-21.24,-26.76,-32.08,-47.79];
    new Chart('g5c1',{type:'bar',indexAxis:'y',data:{labels:rg,datasets:[{data:rd,backgroundColor:rd.map(v=>v>=0?'#1d9e75':'#e24b4a'),borderRadius:3}]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',layout:{padding:{right:44,left:8,top:4}},plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>'Relative perf: '+(c.raw>0?'+':'')+c.raw.toFixed(1)+'%'}}},scales:{x:{title:{display:true,text:'Relative performance % vs industry average',font:{size:9},color:'#406080'},ticks:{...dt,callback:v=>(v>0?'+':'')+v+'%'},grid:dg},y:{ticks:dt,grid:{display:false}}}}});
  }
}
gdraw(1);
</script>
</body>
</html>`

export default function VideoGameDashboard() {
  return (
    <iframe
      srcDoc={html}
      style={{ width: '100%', minHeight: '600px', border: 'none' }}
      title="Video Game Sales Analysis Dashboard"
    />
  )
}
