import React, { useState, useEffect } from 'react';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer';
import Projects from './components/Projects';
import LoadingDots from './components/LoadingDots';
import ScrollStickers from './components/ScrollStickers';  // Import ScrollStickers component
import './styles.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingDots />
      ) : (
        <>
          {/* Pass the setLanguage and setTheme functions to Header */}
          <Header setLanguage={setLanguage} setTheme={setTheme} />
          
          {/* ScrollStickers is now placed correctly */}
          <ScrollStickers />
          
          <div className="main-content">
            <div className="left-column">
              <div className="profile">
                <h1>{language === 'en' ? 'Lisa Krasiuk' : language === 'ua' ? 'Елизавета Красюк' : 'Елизавета Красюкова'}</h1>
                <p>{language === 'en' ? 'Astrophysics, Data Analytics, Web Development' : language === 'ua' ? 'Астрофізика, Аналіз Даних, Веб Розробка' : 'Астрофизика, Анализ Данных, Веб Разработка'}</p>
                <p>{language === 'en' ? 'Based in Orlando, FL 32817' : language === 'ua' ? 'Базуюсь в Орландо, Флорида 32817' : 'Базируюсь в Орландо, Флорида 32817'}</p>
                <p>{language === 'en' ? 'Contact me via email:' : language === 'ua' ? 'Зв\'яжіться зі мною по електронній пошті:' : 'Свяжитесь со мной по электронной почте:'} 
                  <a href="mailto:lisakrasiuk@gmail.com">lisakrasiuk@gmail.com</a>
                </p>

                {/* Social Media Icons */}
                <div className="social-icons">
                  <a href="https://github.com/s1upee" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> {/* GitHub icon */}
                  </a>
                  <a href="https://www.instagram.com/s1upee" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i> {/* Instagram icon */}
                  </a>
                  <a href="https://t.me/s1upee" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-telegram"></i> {/* Telegram icon */}
                  </a>
                </div>

                {/* Language Icons */}
                <div className="language-icons">
                  <div className="language-row">
                    <i className="fab fa-html5"></i> {/* HTML icon */}
                    <i className="fab fa-css3-alt"></i> {/* CSS icon */}
                    <i className="fab fa-js-square"></i> {/* JavaScript icon */}
                    <i className="fab fa-react"></i> {/* React icon */}
                  </div>
                  <div className="language-row">
                    <i className="fab fa-python"></i> {/* Python icon */}
                    <i className="fab fa-cuttlefish"></i> {/* C icon (alternative) */}
                  </div>
                  <div className="language-row">
                    <i className="fab fa-cplusplus"></i> {/* C++ icon */}
                    <i className="fab fa-csharp"></i> {/* C# icon */}
                  </div>
                </div>

              </div>
            </div>

            <div className="right-column">
              <div className="education">
                <h3>{language === 'en' ? 'Education' : language === 'ua' ? 'Освіта' : 'Образование'}</h3>
                <p>{language === 'en' ? 'University of Central Florida - Bachelor of Science in Physics' : language === 'ua' ? 'Університет Центральної Флориди - Бакалавр фізики' : 'Университет Центральной Флориды - Бакалавр физики'}</p>
                <p>{language === 'en' ? 'Expected Graduation: May 2027' : language === 'ua' ? 'Очікувана дата закінчення: травень 2027' : 'Ожидаемое окончание: май 2027'}</p>
                <p>{language === 'en' ? 'Relevant Coursework: Calculus I, II, III, Astronomy, Experimental Methods in Astronomy, Physics Using Geometry, C Programming, Computer Science I' : language === 'ua' ? 'Відповідні курси: Калькулус I, II, III, Астрономія, Експериментальні методи в астрономії, Фізика з використанням геометрії, Програмування на C, Комп’ютерні науки I' : 'Соответствующие курсы: Калькулус I, II, III, Астрономия, Экспериментальные методы в астрономии, Физика с использованием геометрии, Программирование на C, Компьютерные науки I'}</p>
              </div>

              <div className="experience">
                <h3>{language === 'en' ? 'Experience' : language === 'ua' ? 'Досвід' : 'Опыт'}</h3>
                <p>{language === 'en' ? 'Learning Assistant - Mathematics and Algebra Learning Lab at UCF' : language === 'ua' ? 'Асистент з математики та алгебри в Навчальній лабораторії при UCF' : 'Ассистент по математике и алгебре в учебной лаборатории UCF'}</p>
                <p>{language === 'en' ? 'January 2024 - Present' : language === 'ua' ? 'Січень 2024 - теперішній час' : 'Январь 2024 - настоящее время'}</p>
                <ul>
                  <li>{language === 'en' ? 'Facilitate study sessions for Calculus I students.' : language === 'ua' ? 'Проводити заняття з калькулусу для студентів I курсу.' : 'Проводит занятия по калькулюсу для студентов I курса.'}</li>
                  <li>{language === 'en' ? 'Assist in creating educational resources to enhance student comprehension.' : language === 'ua' ? 'Допомога у створенні навчальних матеріалів для покращення розуміння студентами.' : 'Помощь в создании образовательных материалов для улучшения понимания студентами.'}</li>
                  <li>{language === 'en' ? 'Foster collaborative learning to improve problem-solving skills.' : language === 'ua' ? 'Сприяння колективному навчанню для покращення навичок розв’язання задач.' : 'Содействие коллективному обучению для улучшения навыков решения задач.'}</li>
                </ul>
              </div>

              <section className="projects">
                <h3>{language === 'en' ? 'Projects' : language === 'ua' ? 'Проекти' : 'Проекты'}</h3>
                <Projects language={language} />
              </section>
            </div>
          </div>

          <Footer footerText={language === 'en' ? 'Made with love <3' : language === 'ua' ? 'Зроблено з любов’ю <3' : 'Сделано с любовью <3'} />
        </>
      )}
    </div>
  );
}

export default App;
