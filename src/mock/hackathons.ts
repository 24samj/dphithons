import { Hackathon } from "../types/types";
import img1 from "../assets/cardimage/img1.png";
import img2 from "../assets/cardimage/img2.png";
import img3 from "../assets/cardimage/img3.png";
import img4 from "../assets/cardimage/img4.png";
import img5 from "../assets/cardimage/img5.png";
import img6 from "../assets/cardimage/img6.png";

export const hackathons: Hackathon[] = [
  {
    id: "c07kbctQOY",
    name: "Data Science Bootcamp - Graded Datathon",
    startDate: "2024-10-10T14:48:00",
    endDate: "2024-10-20T14:48:00",
    description:
      "A rigorous datathon designed to test your data science skills through various real-world challenges.",
    overview: `In this datathon, participants will be confronted with a series of real-world data science challenges that demand a deep understanding of statistical analysis, data cleaning, and machine learning algorithms. The competition is designed to simulate the high-pressure environment of a data science job, requiring quick thinking and problem-solving abilities. Participants will be expected to work with complex datasets, extract meaningful insights, and develop predictive models that can drive actionable business outcomes.\n

Throughout the datathon, you will engage with various tasks such as feature engineering, model selection, and hyperparameter tuning. Each task is graded based on the accuracy, efficiency, and creativity of the solutions provided. The event is structured to not only assess your technical skills but also to evaluate your ability to communicate findings effectively through visualizations and reports. The iterative nature of the challenges ensures that you refine your models and improve their performance over multiple submissions.\n

By the end of the datathon, you will have gained substantial experience in handling real-world data science problems and a deeper understanding of how to apply theoretical knowledge in practical scenarios. This experience is invaluable for anyone looking to pursue a career in data science or enhance their existing skill set. The graded aspect of the datathon provides a clear benchmark of your abilities, making it an excellent addition to your professional portfolio.`,
    image: img1,
    level: "Medium",
  },
  {
    id: "xWBvbRWJxZ",
    name: "Data Sprint 72 - Butterfly Identification",
    startDate: "2024-09-10T14:48:00",
    endDate: "2024-09-20T14:48:00",
    description:
      "Identify the class to which each butterfly belongs using advanced computer vision techniques.",
    overview: `Butterflies are among the most diverse and visually stunning insects, with thousands of species worldwide. In this data sprint, you will take on the challenge of classifying butterfly species based on images. This project will require you to utilize computer vision techniques, particularly convolutional neural networks (CNNs), to identify the specific species from a large dataset of butterfly images. The goal is to create a model that is both accurate and efficient in identifying species even with variations in lighting, angle, and image quality.\n

The dataset provided for this sprint contains high-resolution images of butterflies, each labeled with the correct species name. You will need to preprocess these images, possibly augmenting them to improve model robustness. The key to success in this challenge lies in fine-tuning your CNN model, experimenting with different architectures, and employing techniques such as transfer learning. Additionally, you may need to handle class imbalances within the dataset, ensuring that your model does not become biased toward more common species.\n

Beyond the technical challenges, this sprint highlights the importance of biodiversity and conservation efforts. Accurate species identification can aid in monitoring butterfly populations, which are critical indicators of environmental health. By participating in this sprint, you are contributing to a broader effort to protect these delicate creatures and their habitats. Your model could potentially be used in real-world applications by conservationists and researchers working to preserve butterfly diversity.`,
    image: img2,
    level: "Easy",
  },
  {
    id: "vvjjEAxawB",
    name: "Data Sprint 71 - Weather Recognition",
    startDate: "2024-08-10T14:48:00",
    endDate: "2024-10-20T14:48:00",
    description:
      "Build a predictive model to recognize weather conditions based on historical data.",
    overview: `Weather plays a significant role in our daily lives, affecting everything from personal plans to global economics. In this data sprint, you are tasked with creating a machine learning model that can predict weather conditions such as sunny, cloudy, rainy, or snowy based on historical weather data. This challenge involves handling a diverse dataset that includes variables like temperature, humidity, wind speed, and atmospheric pressure. The ability to accurately predict weather conditions based on this data can have far-reaching implications, from improving agricultural outputs to enhancing disaster preparedness.\n

The dataset you'll be working with is extensive, covering various geographic locations and time periods. You'll need to employ data preprocessing techniques to clean and organize the data before feeding it into your model. Feature engineering will be crucial in this task, as you identify which aspects of the data are most predictive of weather outcomes. Depending on your approach, you may use different types of models, including decision trees, random forests, or neural networks, each offering unique advantages in terms of accuracy and computational efficiency.\n

This sprint not only tests your technical abilities but also your understanding of the underlying meteorological principles. As you refine your model, you will gain insights into how different weather patterns are interrelated and how they can be predicted. The final product of this sprint could be a highly accurate weather prediction model that could be used in various industries, from agriculture to transportation. Your work could contribute to more reliable weather forecasting, helping communities prepare for and respond to weather-related events.`,
    image: img3,
    level: "Hard",
  },
  {
    id: "Ark8VXeHZe",
    name: "Data Sprint 70 - Airline Passenger Satisfaction",
    startDate: "2024-06-10T14:48:00",
    endDate: "2024-08-20T14:48:00",
    description:
      "Optimize the balance between airline expenses and passenger satisfaction.",
    overview: `In today's competitive airline industry, passenger satisfaction is a key differentiator. This data sprint challenges you to analyze and optimize the balance between airline operational costs and passenger satisfaction. The dataset provided includes various factors that influence passenger experience, such as in-flight services, seat comfort, and timeliness of flights. Your goal is to build a predictive model that can help airlines understand how changes in operational expenditures impact passenger satisfaction and identify areas where cost reductions can be made without compromising the customer experience.\n

The challenge requires a deep dive into the data to uncover hidden patterns and correlations. You'll need to use advanced analytical techniques to identify the most significant factors affecting satisfaction and explore the trade-offs between cost and quality of service. This may involve building and comparing multiple models to determine the best approach for predicting satisfaction levels. Additionally, you'll have to consider the implications of your findings on airline operations and provide actionable recommendations that align with business objectives.\n

By the end of this sprint, you will have developed a model that not only predicts passenger satisfaction but also provides insights into how airlines can optimize their service offerings. This project will enhance your understanding of the complexities involved in managing large-scale service operations and the importance of data-driven decision-making in improving customer experience. Your work could potentially influence how airlines allocate resources, leading to more efficient operations and happier passengers.`,
    image: img4,
    level: "Easy",
  },
  {
    id: "J7L4YVZWpM",
    name: "Engineering Graduates Employment Outcomes",
    startDate: "2024-08-10T14:48:00",
    endDate: "2024-10-20T14:48:00",
    description:
      "Analyze the employment outcomes of engineering graduates across different regions.",
    overview: `The transition from education to employment is a critical phase in the lives of engineering graduates. This hackathon invites you to analyze and predict the employment outcomes of engineering graduates using a comprehensive dataset that includes variables such as graduation year, field of study, geographic location, and employment status. The goal is to identify trends and factors that significantly influence job placement success and to develop a model that can predict employment outcomes for future graduates.\n

Participants will explore various data points to understand how different factors contribute to employment outcomes. For example, you might investigate the impact of university reputation, internship experience, or regional economic conditions on job placement rates. The challenge lies in building a robust model that can accurately predict employment outcomes while accounting for the diversity of the dataset. You will need to apply techniques such as regression analysis, classification, and possibly even clustering to uncover meaningful insights from the data.\n

This hackathon offers a unique opportunity to contribute to the ongoing discussion about the effectiveness of engineering education and its alignment with industry needs. The insights gained from your analysis could inform educational institutions and policymakers about how to better prepare students for the job market. Additionally, the predictive model you develop could be used by universities to assess and improve their programs, ultimately leading to better employment outcomes for graduates.`,
    image: img5,
    level: "Hard",
  },
  {
    id: "wvjjEAxawB",
    name: "Travel Insurance Claim Prediction",
    startDate: "2024-08-10T14:48:00",
    endDate: "2024-10-20T14:48:00",
    description:
      "Predict the likelihood of insurance claims being filed by travelers.",
    overview: `Travel insurance is essential for protecting travelers against unforeseen events such as trip cancellations, medical emergencies, and lost luggage. In this hackathon, you will develop a predictive model to assess the likelihood of travelers filing insurance claims based on their travel history, demographics, and other relevant factors. The dataset provided includes various features such as destination, duration of travel, type of coverage, and previous claim history, offering a rich set of variables to explore and analyze.\n

Your task is to preprocess the data, engineer relevant features, and build a model that can accurately predict the probability of a claim being filed. This will involve exploring different algorithms, from logistic regression to more complex models like gradient boosting or neural networks. Additionally, you will need to consider the imbalanced nature of the dataset, as claims may be relatively rare compared to the total number of policies. Techniques such as oversampling, undersampling, or using specialized algorithms for imbalanced data may be necessary to achieve a well-performing model.\n

By the end of the hackathon, you will have gained a deeper understanding of the factors that influence travel insurance claims and the challenges of predicting such events. The model you develop could be used by insurance companies to better assess risk and tailor their policies to different segments of travelers. This project not only enhances your machine learning skills but also provides practical insights into the insurance industry, potentially leading to more efficient and customer-focused insurance products.`,
    image: img6,
    level: "Medium",
  },
];
