const insert=document.getElementById("insert");
window.addEventListener('keydown',(e)=>{ 
  insert.innerHTML=`<table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' '? ' sapce':e.key  }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`
});