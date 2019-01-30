// **Aula JSX e React.createElement:

//{/*
// et elemento = <h1 className="titulo">Hello React</h1>

// let elemento = React.createElement(
// 	'h1',
// 	{className:'titulo'},
//  	'New Hello React'
//  );
// *///}
//===============================
// **Aula Como funciona a renderização:
//{/*
// function showHour() {
// 	let elemento = (
// 		<div>
// 			<h1>Good Day</h1>
// 			<h3>It's time: {new Date().toLocaleTimeString()}</h3>
// 		</div>
// 	);

//  	ReactDOM.render(
//  		elemento,
//  		document.getElementById('app')
//  	);
//  }
// setInterval(showHour,1000);
// */}

//================================
//** Aula Componentes e Props(1)
// {/*
// function BemVindo(props) {
// 	return (
// 		<div>
// 			<h1>Seja bem vindo(a)</h1>
// 			<h2>{props.name} ({props.age} years)</h2>
// 		</div>
// 	);
// }

// let elemento = (
// 	<div>
// 		<BemVindo name="Davi" age="33"/>

// 		<hr/>

// 		<BemVindo name="Sarah"age="01"/>
// 	</div>
// );

// ReactDOM.render(
// 	elemento,
// 	document.getElementById('app')
// );
// */}

// //================================
// //** Aula Componentes e Props(2)

// // class BemVindo extends React.Component {
// // 	render() {
// // 		return <h1>Hello, {this.props.name}</h1>;
// // 	}
// // }

// // class Post extends React.Component {
// // 	render() {
// // 		return (
// // 			<div>
// // 				<PostTop author={this.props.name} />
// // 				<PostBody />
// // 				<PostFooter
// // 					likes={this.props.likes}
// // 					comments={this.props.comments}
// // 				/>
// // 			</div>
// // 		);
// // 	}
// // }
// // class PostTop extends React.Component {
// // 	render() {
// // 		return <div>{this.props.author}</div>
// // 	}
// // }

// // class PostBody extends React.Component {
// // 	render() {
// // 		return <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lectus malesuada, maximus justo id, convallis mi...</div>
// // 	}
// // }

// // class PostFooter extends React.Component {
// // 	render() {
// // 		return(
// // 			<div>
// // 				<p>{this.props.likes} Likes.</p>
// // 				<p>{this.props.comments} Comments.</p>
// // 				<hr/>
// // 			</div>
// // 		);
// // 	}
// // }

// // let elemento = (
// // 	<div>
// // 		<Post name="Davi" likes="100" comments="15"/>
// // 		<Post name="Joelma" likes="50" comments="340"/>
// // 		<Post name="Sarah" likes="250" comments="200"/>
// // 	</div>
// // );

// // ReactDOM.render(
// // 	elemento,
// // 	document.getElementById('app')
// // );

//================================
//** Aula State nos componentes
//State é usando dentro da classe
// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			our: '00:00:00'
// 		};
// 		setInterval(() => {
// 			this.setState({our:new Date().toLocaleTimeString()});
// 		},1000);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Now time is:</h1>
// 				<h2>{this.state.our}</h2>
// 			</div>
// 		);
// 	}
// }

// let elemento = (
// 	<div>
// 		<Clock />
// 	</div>
// );

// ReactDOM.render(
// 	elemento,
// 	document.getElementById('app')
// );

//================================
//** Aula Ciclo de Vida do componentes

// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			our: '00:00:00'
// 		};
// 	}
// 	// ciclo quando o componente for renderizado na tela
// 	componentDidMount() {
// 		this.timer = setInterval(() => {
// 			this.setState({our:new Date().toLocaleTimeString()});
// 		},1000);
// 	}

// 	// ciclo o componente for atualizado
// 	componentDidUpdate() {
// 		console.log('Componente Atualizado');
// 	}

// 	//ciclo o componente vai ser desmontado;
// 	componentWillUnmount() {
// 		clearInterval(this.time);
// 	}

// 	// componente deve atualizar(true/false)
// 	shoulComponentUpdate() {
// 		// code here...
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>Now time is:</h1>
// 				<h2>{this.state.our}</h2>
// 			</div>
// 		);
// 	}
// }

// let elemento = (
// 	<div>
// 		<Clock />
// 	</div>
// );

// ReactDOM.render(
// 	elemento,
// 	document.getElementById('app')
// );

//================================
//** Aula Eventos em componentes
// class Pessoa extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nome:this.props.nome
//         };
//         this.limparNome = this.limparNome.bind(this);
//         this.setNome = this.setNome.bind(this);
//     }

//     limparNome() {
//         this.setState({nome: ''});
//     }
//     setNome(nome) {
//         this.setState({nome});
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Olá, meu nome é {this.state.nome}</h1>
//                 <button onClick={this.limparNome}>Limpar Nome</button>
//                 <button onClick={() => {this.setNome('João')}}>Mudar Nome para João</button>
//             </div>
//         );
//     }
// }

// let elemento = (
//     <div>
//         <Pessoa nome="Davi"/>
//     </div>
// );
// ReactDOM.render(
//     elemento,
//     document.getElementById('app')
// );

//================================
//** Aula Renderização condicional

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    status: 1
  };

  this.ativar = this.ativar.bind(this);
  this.desativar = this.desativar.bind(this);
  }

  ativar() {
    this.setState({status:1});
  }
  desativar() {
    this.setState({status:0});
  }
  render() {
    let statusMsg;
    let statusBtn;

    if(this.state.status == 1) {
      statusMsg = 'Ativado';
      statusBtn = <button onClick={this.desativar}>Desativar</button>
    } else {
      statusMsg = 'Desativado';
      statusBtn = <button onClick={this.ativar}>Ativar</button>
    }

    return (
      <div>
        <button onClick={this.mostrar}>Mostrar status</button>
        <p>Status: {statusMsg}</p>
        {statusBtn}
      </div>
    );
  }
}


let elemento = (
  <div>
    <Login />
  </div>
);
ReactDOM.render(
  elemento,
  document.getElementById("app")
);
