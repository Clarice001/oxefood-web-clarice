import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormCupomDesconto extends React.Component{

	state = {

		codigo: '',
		PercentualDesconto: '',
		ValorDesconto: '',
		ValorMinimoPermitidoParaOPedido: '',
		QuantidadeMaximaDeUsoPorCliente: '',
        InicioDaVigencia: '',
        FimDaVigencia: '',
        
	}
 
	salvar = () => {

		let CupomDescontoRequest = {

			codigo: this.state.codigo,
			PercentualDesconto: this.state.PercentualDesconto,
			ValorDesconto: this.state.ValorDesconto,
			ValorMinimoPermitidoParaOPedido: this.state.ValorMinimoPermitidoParaOPedido,
			QuantidadeMaximaDeUsoPorCliente: this.state.QuantidadeMaximaDeUsoPorCliente,
            InicioDaVigencia: this.state.InicioDaVigencia,
            FimDaVigencia: this.state.FimDaVigencia
		}
	
		axios.post("http://localhost:8082/api/cupomDesconto", cupomDescontoRequest)
		.then((response) => {
			console.log('Desconto cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao cadastrar desconto.')
		})
	}

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Cupom de Desconto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

							<Form.Group>

							<Form.Input
								required
								fluid
								label='Código'
								width={10}>
								<InputMask 
								
								value={this.state.codigo}
								onChange={e => this.setState({codigo: e.target.value})}
								/>
							</Form.Input>

							<Form.Input
								fluid
								label='Percentual Desconto'
								width={5}>
								<InputMask 
								
								value={this.state.PercentualDesconto}
								onChange={e => this.setState({PercentualDesconto: e.target.value})}
								/> 
							</Form.Input>

							<Form.Input
								fluid
								label='Valor Desconto'
								width={5}>
								<InputMask 
									

									value={this.state.ValorDesconto}
									onChange={e => this.setState({ValorDesconto: e.target.value})}
								/> 
							</Form.Input>

							</Form.Group>

								
								
								<Form.Group>

									

									<Form.Input
										fluid
										label='Valor Mínimo Permitido para o Pedido'
                                        width={10}>
										<InputMask 
										
										value={this.state.ValorMinimoPermitidoParaOPedido}
										onChange={e => this.setState({ValorMinimoPermitidoParaOPedido: e.target.value})}
										/> 
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Quantidade Máxima de uso por Cliente'
                                        width={10}>
                                        <InputMask 
                                            
											value={this.state.QuantidadeMaximaDeUsoPorCliente}
											onChange={e => this.setState({QuantidadeMaximaDeUsoPorCliente: e.target.value})}
                                        /> 
                                    </Form.Input>

								</Form.Group>
								<Form.Group>

									

											<Form.Input
												fluid
												label='Inicio da Vigência'
												width={4}>
												<InputMask 
													mask="99/99/9999" 
													maskChar={''}
													placeholder="Ex: 20/03/1985"
													value={this.state.InicioDaVigencia}
													onChange={e => this.setState({InicioDaVigencia: e.target.value})}
												/> 
											</Form.Input>

											<Form.Input
												fluid
												label='Fim da vigência'
												width={4}>
												<InputMask 
													mask="99/99/9999" 
													maskChar={''}
													placeholder="Ex: 20/03/1985"
													value={this.state.FimDaVigencia}
													onChange={e => this.setState({FimDaVigencia: e.target.value})}
												/> 
											</Form.Input>

											</Form.Group>	
								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormCupomDesconto;