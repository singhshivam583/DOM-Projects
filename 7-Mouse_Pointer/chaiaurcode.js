
const insert=document.getElementById('insert')

window.addEventListener('click', (e) => {
  insert.innerHTML=`
  <div>Result:</div>
  <div class='color'>
      <table>
          <tr>
            <th>X-Cordinate</th>
            <th>Y-Cordinate</th>
          </tr>
          <tr>
            <td>${e.pageX}</td>
            <td>${e.pageY}</td>
          </tr>
      </table>
  </div>    
`
})
