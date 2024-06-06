
const Employee = require("../model/employee")

exports.createEmployee = (req, res) => {
  
  try {
    const emp = Employee.create(req.body)
    res.status(201).json({ message: "Employee created" })
  }
  catch (err) {
    res.status(401).json({ message: err.message })
  }
}

exports.getAllEmployees = async (req, res) => {
  try {
    const emp = await Employee.findAll();
    res.status(200).json(emp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const emp = await Employee.findOne({ where: { empID: req.params.id } });
    if (!emp) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(emp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const emp = await Employee.findByPk(req.params.id);
    if (!emp) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    await emp.update(req.body);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const emp = await Employee.findByPk(req.params.id);
    if (!emp) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    await emp.destroy()
    res.status(200).json({ message: "Employee deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

