import { ComponentType } from "@angular/cdk/portal";
import { DialogService } from "src/app/service/dialog.service";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

export const userModal = (componentType: ComponentType<LoginComponent | SignupComponent>) => {
  return (target: Object, propertyKey: string, descriptor: PropertyDescriptor, modalData: any = {},) => {
    const originalMethod = descriptor.value;
    descriptor.value = async function ( ...args: any ) {
      DialogService.getInstance()?.openDialog(modalData, componentType)
        .subscribe(validation => {
          if (validation) originalMethod.apply(this, args);
        });
    }

    return descriptor;
  }
}