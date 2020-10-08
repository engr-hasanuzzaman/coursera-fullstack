// N.B: params has to be declared as optional to use default declaration

type P = {
    status: boolean;
    id: string;
    onClick?: (id: string) => void;
}

function foo({status, id, onClick = () => {}}: P) {
    if(onClick) {
        console.log(status, id);
        onClick(id);
    }
}

function handClick(id: string) {
    console.log("clicked id ", id);
}

foo({status: true, id: '2'});