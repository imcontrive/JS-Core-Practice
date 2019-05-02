	static int determinantOfMatrix(int mat[][], int n) 
	{ 
		int D = 0; 
		if (n == 1) 
			return mat[0][0]; 
		int temp[][] = new int[N][N]; 
		
		int sign = 1; 
	
		for (int f = 0; f < n; f++) 
		{ 
			getCofactor(mat, temp, 0, f, n); 
			D += sign * mat[0][f] 
			* determinantOfMatrix(temp, n - 1); 
			sign = -sign; 
		} 
		return D; 
	} 

  function whoIsNext(names, r){
   if(r == 1){
    return names,
  }
  var base = names.length;
  function getIndex(n, i) {
    i = i || base;
    if (n < i) {
        return Math.floor(n * base / i);
    }
    return getIndex(n - i, 2 * i);
  }
  
  return names[getIndex(r-1)];
  
}