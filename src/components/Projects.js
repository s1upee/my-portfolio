import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file

const Projects = ({ language }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage the expanded project

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle expanded state
  };

  return (
    <section>
      {/* New Project with Expandable Box */}
      <div className={`project ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
        <h3>
          {language === 'en' ? 'Oasis – AI-Powered Travel Itinerary WebApp' :
           language === 'ua' ? 'Oasis – AI-Розумний додаток для планування подорожей' :
           'Oasis – ИИ-платформа для планирования путешествий'}
        </h3>
        {isExpanded && (
          <p>
            {language === 'en' ? (
              <>
                Oasis is an innovative web application that combines AI-driven travel planning with social media features.
                The app generates personalized travel itineraries based on users' preferences, drawing from flights, hotels,
                cultural activities, and more. Travelers can share their curated plans with the Oasis community, providing real-time
                insights and recommendations for others to explore.
                <br />
                <strong>Key Features:</strong>
                <ul>
                  <li>AI-Powered Itinerary Generation</li>
                  <li>Social Media Integration</li>
                  <li>User Engagement for Exploration</li>
                </ul>
                <strong>Technologies & Role:</strong>
                <ul>
                  <li>Frontend Development: React</li>
                  <li>Animations: Enhancing user interactions</li>
                </ul>
              </>
            ) : language === 'ua' ? (
              <>
                Oasis - це інноваційний веб-додаток, що поєднує планування подорожей на основі ШІ з соціальними медіа функціями.
                Додаток генерує персоналізовані маршрути подорожей на основі уподобань користувачів, враховуючи авіарейси, готелі,
                культурні заходи та інше. Мандрівники можуть ділитися своїми створеними маршрутами з громадою Oasis, надаючи
                в режимі реального часу інсайти та рекомендації для інших.
                <br />
                <strong>Основні особливості:</strong>
                <ul>
                  <li>Генерація маршруту за допомогою ШІ</li>
                  <li>Інтеграція з соціальними мережами</li>
                  <li>Залучення користувачів для досліджень</li>
                </ul>
                <strong>Технології та роль:</strong>
                <ul>
                  <li>Розробка фронтенду: React</li>
                  <li>Анімації: Покращення взаємодії з користувачем</li>
                </ul>
              </>
            ) : (
              <>
                Oasis - это инновационное веб-приложение, которое сочетает планирование путешествий с помощью ИИ и функции
                социальных сетей. Приложение генерирует персонализированные маршруты путешествий на основе предпочтений
                пользователей, используя данные о рейсах, отелях, культурных мероприятиях и многом другом. Путешественники
                могут делиться своими подобранными маршрутами с сообществом Oasis, предоставляя актуальные советы и
                рекомендации для других.
                <br />
                <strong>Основные особенности:</strong>
                <ul>
                  <li>Генерация маршрута с помощью ИИ</li>
                  <li>Интеграция с социальными сетями</li>
                  <li>Вовлечение пользователей в исследования</li>
                </ul>
                <strong>Технологии и роль:</strong>
                <ul>
                  <li>Разработка фронтенда: React</li>
                  <li>Анимации: Улучшение взаимодействия с пользователем</li>
                </ul>
              </>
            )}
          </p>
        )}
      </div>

      {/* Other Projects */}
      {/* You can similarly add more projects here with conditional rendering for each language as shown above */}
    </section>
  );
};

export default Projects;
