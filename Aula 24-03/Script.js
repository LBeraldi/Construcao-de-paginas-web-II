/*let mat = 
       
    [
        [10,11,12],
        [20,21,22],
        [30,31,32]
    ];


        for (let i = 0; i < mat.length ; i++ ) {
            for (let j = 0; j < mat[i].length ; j++ ){
                console.log(mat [i] [j]);
            }

        }*/

     
        let minhaMatriz = [
            [1, 2, 3, 1, 2],
            [4, 5, 6, 1, 2],
            [7, 8, 9, 1, 2],
            [1, 2, 3, 1, 2],
            [4, 5, 6, 1, 2],
            [7, 8, 9, 1, 2]
          ];
          
          for (let i = 0; i < minhaMatriz.length; i++) {
            for (let j = 0; j < minhaMatriz[i].length; j++) {
              if (i === j) {
                console.log(minhaMatriz[i][j]);
              }
            }
          }

          const minhaMatriz2 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
          ];
          
          const n = minhaMatriz2.length;
          
          for (let i = 0; i < n; i++) {
            const j = n - i - 1;
            console.log(minhaMatriz2[i][j]);
          }
          
