import React, { useEffect, useState } from 'react'

import './Calculator.css'

import lock from '../../images/lock.svg'
import men from '../../images/men.png'
import tap from '../../images/tap.svg'
import unlock from '../../images/unlock.svg'

import derevo from '../../images/Derevo-2.png'
import calcFlag from '../../images/Vector.png'

import Button from '../../UI/Button/Button'
import ProgressBar from '../ProgressBar/ProgressBar'
import QuestionBlock from '../QuestionBlock/QuestionBlock'

const Calculator = () => {
	const [currentStep, setCurrentStep] = useState(1)
	const [completed, setCompleted] = useState(0)
	const [checkedItems, setCheckedItems] = useState({})
	const [buttonDisabled, setButtonDisabled] = useState(true)
	const handleCheckboxChange = updatedItems => {
		const isChecked = Object.values(updatedItems).some(item => item)

		setButtonDisabled(isChecked)
	}
	const progressMove = () => {
		setCompleted(prevCompleted => {
			if (prevCompleted + 25 >= 100) {
				// Логика для завершения
				return 100
			}
			return prevCompleted + 25
		})
	}

	useEffect(() => {
		setCompleted(0)
	}, [])

	const text = 'Далее'
	const handleChange = event => {
		const { name, checked } = event.target
		setCheckedItems({
			...checkedItems,
			[name]: checked,
		})
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
								<QuestionBlock
									currentStep={currentStep}
									handleCheckboxChange={handleCheckboxChange}
								/>
								<div className='calculator__bottom'>
									<div className='calculator__bottom-text'>
										<img src={tap} alt='tap img' />

										<p>
											<span>Нажимайте на вариант ответа</span> и переходите к
											следующему вопросу
										</p>
									</div>
									<div className='buttons'>
										{currentStep > 1 && (
											<Button
												props='Назад'
												clickHandlerNext={handleBack}
												disabled={false}
											/>
										)}
										<Button
											props={text}
											clickHandler={progressMove}
											clickHandlerNext={handleNext}
											disabled={
												!buttonDisabled ||
												Object.keys(checkedItems).length === 1
											}
											checkboxesSelected={Object.values(checkedItems).some(
												item => item
											)}
										/>
									</div>
								</div>
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
