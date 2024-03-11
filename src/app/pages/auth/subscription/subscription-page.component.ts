import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import {
  NbCardModule,
  NbDialogService,
  NbStepperComponent,
  NbStepperModule,
} from "@nebular/theme";

@Component({
  selector: "app-subscription-page",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NbStepperModule,
    NbCardModule,
  ],
  templateUrl: "./subscription-page.component.html",
  styleUrls: ["./subscription-page.component.scss"],
})
export class SubscriptionPageComponent implements OnInit {
  isConfirmation = false;
  planRegister: string;
  selected = false;
  showModal: boolean = false;

  constructor(private router: Router, private dialogService: NbDialogService) {}

  ngOnInit(): void {}
  @ViewChild(NbStepperComponent) stepper: NbStepperComponent;

  selectPlanAndAdvance(plan: string): void {
    // Aquí puedes manejar la lógica de selección del plan, por ejemplo:
    console.log(`Plan seleccionado: ${plan}`);
    // Luego avanzas al siguiente paso
    this.planRegister = plan;
    this.stepper.next();
    this.selected = true;
    console.log(this.planRegister, "plan");
  }

  toggleModal() {
    this.showModal = true;

    // Cierra el modal después de 3 segundos (3000 milisegundos)
    if (this.showModal) {
      setTimeout(() => {
        this.showModal = false;
        // Asegúrate de actualizar el estado en el contexto de Angular
        // this.updateModalDisplay();
      }, 3000);
    }
  }

  selectedPaymentMethod: string;

  selectPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
    console.log(`Método de pago seleccionado: ${method}`);
    // Aquí puedes agregar más lógica según sea necesario
  }
}
