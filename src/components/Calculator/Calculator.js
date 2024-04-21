import React, { useEffect, useState } from 'react'

import './Calculator.css'

import home from '../../images/house.png'
import lock from '../../images/lock.svg'
import men from '../../images/men.png'
import sauna from '../../images/sauna.png'
import tap from '../../images/tap.svg'
import unlock from '../../images/unlock.svg'

import derevo from '../../images/Derevo-2.png'
import calcFlag from '../../images/Vector.png'
import basseinOne from '../../images/basseinOne.jpg'
import basseinTwo from '../../images/basseinTwo.jpg'
import doorOne from '../../images/doorOne.jpeg'
import doorTwo from '../../images/doorTwo.jpg'
import outOne from '../../images/outOne.jpg'
import outTwo from '../../images/outTwo.jpg'
import window from '../../images/window.jpg'
import windowTwo from '../../images/windowTwo.jpg'

import Button from '../../UI/Button/Button'
import CheckboxArray from '../../UI/Checkbox/CheckboxArray'
import ProgressBar from '../ProgressBar/ProgressBar'

const Calculator = () => {
	const [completed, setCompleted] = useState(0)
	const [currentStep, setCurrentStep] = useState(1)
	const [buttonDisabled, setButtonDisabled] = useState(true)
	const [totalCost, setTotalCost] = useState(0) // Состояние для хранения итоговой стоимости
	const prices = {
		home: 10000,
		sauna: 5000,
		windowOne: 2000,
		windowTwo: 3000,
		basseinOne: 8000,
		outOne: 3000,
		doorOne: 4000,
	}

	const progressMove = () => {
		setCompleted(prevCompleted => {
			if (prevCompleted + 20 >= 100) {
				// Логика для завершения
				return 100
			}
			return prevCompleted + 20
		})
	}

	useEffect(() => {
		setCompleted(0)
	}, [])

	const text = 'Далее'

	// Checkboxes
	const [checkedItems, setCheckedItems] = useState({})
	const handleChange = event => {
		setCheckedItems({
			...checkedItems,
			[event.target.name]: event.target.checked,
		})
		console.log('checkedItems: ', checkedItems)

		// Обновляем итоговую стоимость при выборе варианта
		if (event.target.checked) {
			setTotalCost(prevCost => prevCost + prices[event.target.name])
		} else {
			setTotalCost(prevCost => prevCost - prices[event.target.name])
		}
	}
	const checkboxes = [
		{
			name: 'home',
			key: 'checkBox1',
			label: 'Дом',
			customClass: 'custom-checkbox',
		},
		{
			name: 'sauna',
			key: 'checkBox2',
			label: 'Сауна',
			customClass: 'custom-checkbox',
		},
		{
			name: 'windowOne',
			key: 'checkBox3',
			label: 'Пластиковые окна',
			customClass: 'custom-checkbox',
		},
		{
			name: 'windowTwo',
			key: 'checkBox4',
			label: 'Деревянные окна',
			customClass: 'custom-checkbox',
		},
	]

	const handleCheckboxChange = updatedItems => {
		const isChecked = Object.values(updatedItems).some(item => item)
		setButtonDisabled(isChecked)
	}

	const handleNext = () => {
		setCurrentStep(currentStep + 1)
	}

	const handleBack = () => {
		setCurrentStep(prevStep => (prevStep - 1 >= 1 ? prevStep - 1 : 1))
		setCompleted(prevCompleted =>
			prevCompleted - 20 >= 0 ? prevCompleted - 20 : 0
		) // Уменьшаем прогресс при нажатии "Назад"
	}
	return (
		<>
			{currentStep <= 5 && (
				<div className='calculator__wrapper'>
					<img className='calculator__derevo' src={derevo} alt='derevo img' />
					<div className='calculator'>
						<div className='calculator__container'>
							<div className='calculator__left'>
								<h2 className='calculator__title'>
									Рассчитайте предварительную стоимость{' '}
									<span>дома за 1 минуту</span>
								</h2>

								<ProgressBar
									bgcolor={'#6a1b9a'}
									completed={completed}
									// increaseWidth={progressMove}
								/>

								<div className='calculator__left-title'>
									<span>01.</span>
									<h3>Что будем строить?</h3>
								</div>
								{currentStep === 1 && (
									<div className='calculator__cards'>
										<div>
											<img
												className='calculator__img'
												src={home}
												alt='home img'
											/>
											{/* <Checkbox /> */}
											<CheckboxArray
												handleCheckboxChange={handleCheckboxChange}
											/>
										</div>
										<div>
											<img
												className='calculator__img'
												src={sauna}
												alt='sauna img'
											/>
											{/* <Checkbox /> */}
											<CheckboxArray
												handleCheckboxChange={handleCheckboxChange}
											/>
										</div>
									</div>
								)}
								{currentStep === 2 && (
									<div>
										<div className='calculator__cards'>
											<div>
												<img
													className='calculator__img'
													src={window}
													alt='window img'
												/>

												<CheckboxArray
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
											<div>
												<img
													className='calculator__img'
													src={windowTwo}
													alt='window img'
												/>

												<CheckboxArray
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
										</div>
									</div>
								)}
								{currentStep === 3 && (
									<div>
										<div className='calculator__cards'>
											<div>
												<img
													className='calculator__img'
													src={basseinOne}
													alt='home img'
												/>
												{/* <Checkbox /> */}
												<CheckboxArray
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
											<div>
												<img
													className='calculator__img'
													src={basseinTwo}
													alt='sauna img'
												/>
												{/* <Checkbox /> */}
												<CheckboxArray
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
										</div>
									</div>
								)}
								{currentStep === 4 && (
									<div>
										<div className='calculator__cards'>
											<div>
												<img
													className='calculator__img'
													src={outOne}
													alt='home img'
												/>
												{/* <Checkbox /> */}
												<CheckboxArray
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
											<div>
												<img
													className='calculator__img'
													src={outTwo}
													alt='sauna img'
												/>
												{/* <Checkbox /> */}
												<CheckboxArray
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
										</div>
									</div>
								)}
								{currentStep === 5 && (
									<div>
										<div className='calculator__cards'>
											<div>
												<img
													className='calculator__img'
													src={doorOne}
													alt='home img'
												/>
												{/* <Checkbox /> */}
												<CheckboxArray
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
											<div>
												<img
													className='calculator__img'
													src={doorTwo}
													alt='sauna img'
												/>
												{/* <Checkbox /> */}
												<CheckboxArray
													handleCheckboxChange={handleCheckboxChange}
												/>
											</div>
										</div>
									</div>
								)}
								<div className='calculator__bottom'>
									<div className='calculator__bottom-text'>
										<img src={tap} alt='tap img' />

										<p>
											<span>Нажимайте на вариант ответа</span> и переходите к
											следующему вопросу
										</p>
									</div>
									<Button props='Назад' clickHandlerNext={handleBack} />
									<Button
										props={text}
										clickHandler={progressMove}
										clickHandlerNext={handleNext}
										disabled={buttonDisabled}
									/>
								</div>
								<div>Итоговая стоимость: {totalCost} рублей</div>
							</div>

							<div className='calculator__right'>
								<img className='calculator__cards-flag' src={calcFlag} />
								<div className='calculator__right-card'>
									<img src={men} alt='men img' />
									<h3 className='calculator__right-title'>Михаил Иванов</h3>
									<span>Ведущий архитектор</span>

									<p className='calculator__right-text'>
										Ответив на вопросы <span>вы получите:</span>
									</p>

									<ul className='calculator__list'>
										<li className='calculator__list-item'>
											<img src={unlock} alt='unlock' />
											<p>Гарантированную скидку</p>
											<span>1%</span>
										</li>
										<li className='calculator__list-item calculator__list-item--bg-1'>
											<img src={lock} alt='unlock' />
											<p>Ориентировочную стоимость строительства</p>
										</li>
										<li className='calculator__list-item calculator__list-item--bg-2'>
											<img src={lock} alt='unlock' />
											<p>Точную подборку проектов исходя изваших ответов</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Calculator
