import { Pie } from 'react-chartjs-2'

function graphic (type) {

    const pieGraphic = () => {
        const data = {
          labels: type.map(item => item.categoria), 
          datasets: [
            {
              data: type.map(item => item.qtd),
              backgroundColor: [
                'rgba(21, 49, 49, 1)',
                'rgba(36, 174, 174, 1)',
                'rgba(41, 109, 109, 1)'
              ],
              borderColor: [
                'rgba(41, 109, 109, 1)'
    
              ],
              borderWidth: 1,
              hoverOffset: 4,
              
            },
          ],
        };
        const options = {
          layout: {
            padding: 20
        },
          plugins: {
            legend: {
              labels: {
                color: "black", 
                font:{
                  size: 15
                }
              }
            },
            
          },
        }
        return  <Pie data={data} options={options} />
    }

    return pieGraphic();
    
}

export default graphic;
