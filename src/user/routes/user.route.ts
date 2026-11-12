import { Router } from "express";
import { UsersController } from "../controllers/user.controller";

export class UserRoute {
  private readonly router: Router;

  // Se inyecta el controlador en el constructor
  constructor(private readonly usersController: UsersController) {
    this.router = Router();
    this.setRoutes();
  }

  private setRoutes(): void {
    // Nota: Si los métodos del controlador usan 'this', asegúrate de hacer bind
    // o declararlos como arrow functions en el controlador: (req, res) => ...
    this.router.post("/", this.usersController.create);
    this.router.patch("/:id", this.usersController.update);
    this.router.delete("/:id", this.usersController.delete);
    this.router.get("/", this.usersController.findAll);
    this.router.get("/:id", this.usersController.findOne);
  }

  // Getter para obtener el router configurado
  get routes(): Router {
    return this.router;
  }
}