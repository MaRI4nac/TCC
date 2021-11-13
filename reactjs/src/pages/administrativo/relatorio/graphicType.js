import { Pie } from 'react-chartjs-2'

    const PieGraphic = (props) => {
      console.log(props);
        const data = {
          labels: props.info.map(i => i.categoria), 
          datasets: [
            {
              data: props.info.map(i => i.qtd),
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
export default PieGraphic;
