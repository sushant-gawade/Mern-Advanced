let n=5;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log();
}

let m=5;
for(let i=1;i<=m;i++){
    for(let j=1;j<=m-i+1;j++){
        process.stdout.write("*");
    }
    console.log();
}


for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j.toString());
    }
    console.log();
}

for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write(i.toString());
    }
    console.log();
}

for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write(j.toString());
    }
    console.log();
}

for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write((n-i+1).toString());
    }
    console.log();
}

/* i want to trangle

 */
for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write(" ");
    }
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log();
}
//pyramid pattern
for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i;j++){
        process.stdout.write(" ");
    }
    for(let j=1;j<=2*i-1;j++){
        process.stdout.write("*");
    }
    console.log();
}
// same pyramid pattern using diffenert method
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=n-i;j++){
        str+=" ";
    }
    for(let j=1;j<=2*i-1;j++){
        str+="*";
    }
    console.log(str);
}

let n1=5;
let sp=n-1;
let st=1;
for(let i=1;i<=n1;i++){
    let str="";
    for(let j=1;j<=sp;j++){
        str+=" ";
    }
    for(let j=1;j<=st;j++){
        str+="*";
    }
    console.log(str);
    sp--;
    st+=2;
}
// inverted pyramid pattern
let n2=5;
let sp1=0;
let st1=n2*2-1;
for(let i=1;i<=n2;i++){
    let str="";
    for(let j=1;j<=sp1;j++){
        str+=" ";
    }
    for(let j=1;j<=st1;j++){
        str+="*";
    }
    console.log(str);
    sp1++;
    st1-=2;
}