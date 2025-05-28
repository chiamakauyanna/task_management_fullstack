import { createContext} from "react";
import type { FormContextType } from "../interfaces/context";

export const FormContext = createContext<FormContextType | null>(null);