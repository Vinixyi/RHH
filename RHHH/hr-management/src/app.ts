import express from 'express';
import bodyParser from 'body-parser';
import candidatesRoutes from './routes/candidatesRoutes';
import employeesRoutes from './routes/employeesRoutes';
import experienceRoutes from './routes/experienceRoutes';
import languagesRoutes from './routes/languagesRoutes';
import positionsRoutes from './routes/positionsRoutes';
import skillsRoutes from './routes/skillsRoutes';
import trainingsRoutes from './routes/trainingsRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/candidates', candidatesRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/languages', languagesRoutes);
app.use('/api/positions', positionsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/trainings', trainingsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});