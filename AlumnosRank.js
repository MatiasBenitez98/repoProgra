let alumnos = [
    {
      nombre: 'MiaFate',
      ranking: 4
    },
    {
      nombre: 'Argentum',
      ranking: 2
    },
    {
      nombre: 'Lucas',
      ranking: 1
    },
    {
      nombre: 'Ema',
      ranking: 3
    }
  ]

  /*let liderRanking = []

  function mostarLiderdeRanking(ranking,liderRanking){
      for(let i = 0; i < ranking.length; i++){
          const rank = ranking[i]

          liderRanking.push(rank)
      }
      return liderRanking
    }

    for(let i = 0; i < alumnos.length; i++){
        const alumno = alumnos[i]

        if(alumno.ranking >= 1){
            liderRanking = mostrarNombresdeIng(alumno.ranking, liderRanking)
        }
    }

    const liderRank = 'El lider de ranking en discord es' + liderRanking

    console.log(liderRank)*/
    
    for(let i = 0; i < alumnos.length; i++){
        const liderRank = alumnos[i]

        if(liderRank.ranking == 1){
            console.log(liderRank)
        }
    }